import gql from "graphql-tag";

export default gql`
  query getSpots(
    $limit: Int
    $skip: Int
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
        limit: $limit
        skip: $skip
        includeMy: $includeMy
        includeAllFriends: $includeAllFriends
        includeSelectedFriends: $includeSelectedFriends
        sortOrder: $sortOrder
        sortReverse: $sortReverse
        spotsSearchSelections: $spotsSearchSelections
        location: $location
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
        userID
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

// $nCOStationsNearestLimit: Int
// $nRtStationsNearestLimit: Int
// $hiloData: Boolean
// $hourlyData: Boolean

// nCOStationsNearest(
//   input: {
//     stationsLimit: $nCOStationsNearestLimit
//     hiloData: $hiloData
//     hourlyData: $hourlyData
//   }
// ) {
//   distanceAway
//   nCOStation {
//     _id
//     name
//     loc {
//       coordinates
//     }
//   }
// }
// nRtStationsNearest(input: { stationsLimit: $nRtStationsNearestLimit }) {
//   distanceAway
//   nRtStation {
//     _id
//     loc {
//       coordinates
//     }
//   }
// }
