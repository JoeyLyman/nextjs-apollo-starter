import gql from "graphql-tag";

export default gql`
  query getUserProfile($input: GetUserProfileInput) {
    getUserProfile(input: $input) {
      code
      success
      message
      relation
      user {
        _id
        username
        email {
          address
          confirmed
        }
        profilePicture {
          publicID
        }
        bio
        name
        friendsIDs
        loc {
          type
          coordinates
          properties {
            nearestLocation {
              loc {
                type
                coordinates
              }
              placeType
              text
            }
          }
        }
      }
    }
  }
`;
