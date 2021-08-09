import gql from "graphql-tag";

export default gql`
  mutation updateProfileLocation($input: UpdateProfileLocationInput!) {
    updateProfileLocation(input: $input) {
      code
      success
      message
      user {
        _id
        username
        name
        email {
          address
          confirmed
          newAddress
        }
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
