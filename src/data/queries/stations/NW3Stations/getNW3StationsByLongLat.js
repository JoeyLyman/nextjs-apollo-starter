import gql from "graphql-tag";

export default gql`
  query getNW3StationsByLongLat($input: GetNW3StationsByLongLatInput) {
    getNW3StationsByLongLat(input: $input) {
      distanceAway
      nW3Station {
        _id
        regions
        models
        loc {
          coordinates
        }
      }
    }
  }
`;
