import gql from "graphql-tag";

export default gql`
  mutation softDeleteSpot($input: DeleteSpotInput!) {
    softDeleteSpot(input: $input) {
      code
      success
      message
      spot {
        _id
      }
    }
  }
`;
