import gql from "graphql-tag";

export default gql`
  query getNW3StationByID($input: GetNW3StationByIDInput) {
    getNW3StationByID(input: $input) {
      distanceAway
      distanceUnits
      directionCompass
      directionDegrees
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
