import gql from "graphql-tag";

export default gql`
  query getSpots(
    #$limit: Int
    #$skip: Int
    $includeMy: Boolean
    $includeAllFriends: Boolean
    $includeSelectedFriends: [ID] # $location: PointInput #$sortOrder: String
    $spotsSearchSeletions: SpotsSearchSelectionsInput #$sortReverse: Boolean
  ) # $locationSearchSelections: [LocationSearchSelection]
  # $nW3StationsNearestLimit: Int
  # $nCOStationsNearestLimit: Int
  # $nRtStationsNearestLimit: Int
  # $hiloData: Boolean
  # $hourlyData: Boolean
  {
    getSpots(
      input: {
        #limit: $limit
        #skip: $skip
        includeMy: $includeMy
        includeAllFriends: $includeAllFriends
        includeSelectedFriends: $includeSelectedFriends
        spotsSearchSelections: $spotsSearchSelections

        #sortOrder: $sortOrder
        #sortReverse: $sortReverse
        # locationSearchSelections: $locationSearchSelections
        # location: $location
      }
    ) {
      totalCount {
        value
      }
      spots {
        _id
        name
        notes
        loc {
          coordinates
        }
      }
    }
  }
`;
