import gql from "graphql-tag";

export default gql`
  mutation denyBuddyOffer($input: BuddyUpdateInput!) {
    denyBuddyOffer(input: $input) {
      code
      success
      message
      buddy {
        _id
        username
        name
        friendsIDs
      }
    }
  }
`;
