import gql from "graphql-tag";

export default gql`
  mutation offerBuddy($input: BuddyUpdateInput!) {
    offerBuddy(input: $input) {
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
