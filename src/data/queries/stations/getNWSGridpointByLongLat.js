import gql from "graphql-tag";

export default gql`
  query getNWSGridpointByLongLat($input: GetNWSGridpointByLongLatInput) {
    getNWSGridpointByLongLat(input: $input) {
      source
      gridpoint {
        _id
        forecastUrl
        polygon {
          type
          coordinates
        }
      }
    }
  }
`;
