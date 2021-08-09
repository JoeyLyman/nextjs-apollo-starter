import React from "react";
// Apollo
import { useQuery } from "@apollo/react-hooks";

// Queries
import GET_SPOTS from "../queries/spots/getAllSpots.js";
// Context : to know what filters and sort to have for search
import { useSearchState } from "../../context/search/search/context";

const ContextWrapper = (props) => {
  const searchState = useSearchState();

  const {
    spots: {
      filters: { social },
      sort,
    },
    updateSortByLocationOnMapMove,
  } = searchState;

  return (
    <AllSpotsDataWrapper
      {...props}
      socialSearchCtx={social}
      sortOrder={sort.type}
    />
  );
};

const AllSpotsDataWrapper = (props) => {
  const { socialSearchCtx, sortOrder } = props;
  // Query Spots
  const {
    loading: allSpotsLoading,
    data: allSpotsData,
    error: allSpotsError,
    //refetch: spotsRefetch,
  } = useQuery(GET_SPOTS, {
    variables: {
      skip: 0,
      limit: 100000,
      includeMy: true, //socialSearchCtx.includeMy,
      includeAllFriends: false,
      sortOrder: "REPORTS_COUNT", //sortOrder.value,
      locationToSortBy: {
        long: -157.8,
        lat: 30.8,
      },
      spotsSearchSelections: {
        categories: ["All Spots"],
        spots: [],
        boundingBoxes: [[]],
      },
    },
    errorPolicy: "all",
  });

  if (allSpotsError) {
    console.log(`allSpotsError in spots list:`, allSpotsError);
  }

  const childrenWithData = React.Children.map(props.children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        allSpotsLoading,
        spotsFromWrapper: allSpotsData
          ? allSpotsData.getSpots.spots
          : undefined,
        allSpotsError,
      });
    }
    return child;
  });

  return <>{childrenWithData}</>;
};

export default ContextWrapper;
