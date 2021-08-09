    // Example in addSpot page

    {
      update(cache, { data }) {
        const { createSpot } = data;
        if (createSpot.code == "200") {
          const newSpot = {
            ...createSpot.spot,
            __typename: "Spot",
          };
          const currentGetSpotsCacheData = cache.readQuery({
            query: GET_ALL_MY_SPOT_NAMES_AND_LOCATIONS,
            variables: getSpotsVariables,
          });

          // Delete all Spots in cache (so that other getSpots queries refetch)
          Object.keys(cache.data.data).forEach(
            (key) => key.match(/^Spot/) && cache.data.delete(key)
          );

          // Repopulate cache only with spots from GET_ALL_MY_SPOT_NAMES_AND_LOCATIONS query
          cache.writeQuery({
            query: GET_ALL_MY_SPOT_NAMES_AND_LOCATIONS,
            variables: getSpotsVariables,
            data: {
              getSpots: {
                totalCount: {
                  value: currentGetSpotsCacheData.getSpots.totalCount.value + 1,
                  __typename: "ResponseCount",
                },
                spots: [...currentGetSpotsCacheData.getSpots.spots, newSpot],
                __typename: "GetSpotsQueryResponse",
              },
            },
          });
        }
      },
