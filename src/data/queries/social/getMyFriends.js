import gql from "graphql-tag";

export default gql`
  query getMyProfile {
    getMyProfile {
      code
      success
      message
      user {
        _id
        username
        name
        friends {
          username
          _id
          name
        }
        friendsIDs
        profilePicture {
          publicID
        }
      }
    }
  }
`;
