import gql from "graphql-tag";

export default gql`
  query searchUsers($input: SearchUsersInput) {
    searchUsers(input: $input) {
      myself {
        _id
        username
        name
        profilePicture {
          publicID
        }
        friendsIDs
      }
      buddies {
        _id
        username
        name
        profilePicture {
          publicID
        }
        friendsIDs
      }
      offersReceived {
        _id
        username
        name
        profilePicture {
          publicID
        }
        friendsIDs
      }
      offersSent {
        _id
        username
        name
        profilePicture {
          publicID
        }
        friendsIDs
      }
      potentials {
        _id
        username
        name
        profilePicture {
          publicID
        }
        friendsIDs
      }
    }
  }
`;
