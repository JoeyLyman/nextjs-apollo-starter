import gql from "graphql-tag";

export default gql`
  mutation removeBuddy($input: BuddyUpdateInput!) {
    removeBuddy(input: $input) {
      code
      success
      message
      user {
        _id
        username
        name
        friendsIDs
      }
    }
  }
`;
