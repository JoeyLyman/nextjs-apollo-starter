import gql from "graphql-tag";

export default gql`
  mutation cancelBuddyOffer($input: BuddyUpdateInput!) {
    cancelBuddyOffer(input: $input) {
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
