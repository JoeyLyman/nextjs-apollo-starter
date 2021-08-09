import gql from "graphql-tag";

export default gql`
  query getSpots(
    $input: GetSpotsInput # $limit: Int # $skip: Int
  ) # $includeMy: Boolean
  # $includeAllFriends: Boolean
  # $includeSelectedFriends: [ID]
  # $sortOrderForecasts: String
  # $sortReverse: Boolean
  # $specificSpots: [ID]
  # $location: PointInput
  {
    getSpots(input: $input) {
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
        user {
          username
        }
        userID
        reverseGeocode {
          success
          message
          value {
            country {
              _id
              placeType
              text
              placeName
              bbox
              center
              loc {
                coordinates
              }
            }
            region {
              _id
              placeType
              text
              placeName
              bbox
              center
              loc {
                coordinates
              }
            }
            place {
              _id
              placeType
              text
              placeName
              bbox
              center
              loc {
                coordinates
              }
            }
          }
        }
      }
    }
  }
`;
