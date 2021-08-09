import gql from "graphql-tag";

export default gql`
  query getAllNCOStations {
    getAllNCOStations {
      _id
      loc {
        coordinates
      }
    }
  }
`;
