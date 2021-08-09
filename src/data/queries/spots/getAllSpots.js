import gql from "graphql-tag";

export default gql`
  query getSpots(
    $includeMy: Boolean
    $includeAllFriends: Boolean
    $includeSelectedFriends: [ID]
    $sortOrder: SpotsSortOrders
    $sortReverse: Boolean
    $location: PointInput
    $spotsSearchSelections: SpotsSearchSelectionsInput
  ) {
    getSpots(
      input: {
        includeMy: $includeMy
        includeAllFriends: $includeAllFriends
        includeSelectedFriends: $includeSelectedFriends
        sortOrder: $sortOrder
        sortReverse: $sortReverse
        location: $location
        spotsSearchSelections: $spotsSearchSelections
      }
    ) {
      totalCount {
        value
      }
      spots {
        _id
        user {
          username
          profilePicture {
            publicID
          }
        }
        name
        notes
        loc {
          coordinates
        }
        reportsCount
        timezones
        nW3StationsPriority
        nCOStationsPriority
        nWSGridpoint {
          gridpoint {
            forecastUrl
            polygon {
              type
              coordinates
            }
          }
        }
      }
    }
  }
`;

//     $nW3StationsNearestLimit: Int

// nW3StationsNearest(input: { stationsLimit: $nW3StationsNearestLimit }) {
//    distanceAway
//    nW3Station {
//      _id
//      loc {
//        coordinates
//      }
//    }
//  }
