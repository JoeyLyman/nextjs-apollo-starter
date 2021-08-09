import gql from "graphql-tag";

export default gql`
  mutation acceptBuddyOffer($input: BuddyUpdateInput!) {
    acceptBuddyOffer(input: $input) {
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
