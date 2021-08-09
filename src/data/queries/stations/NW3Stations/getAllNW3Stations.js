import gql from "graphql-tag";

export default gql`
  query getAllNW3Stations {
    getAllNW3Stations {
      _id
      loc {
        coordinates
      }
    }
  }
`;
