import gql from "graphql-tag";

export default gql`
  mutation createSpot($input: CreateSpotInput!) {
    createSpot(input: $input) {
      code
      success
      message
      spot {
        _id
        name
        notes
        loc {
          coordinates
        }
        timezones
      }
    }
  }
`;
