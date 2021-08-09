import gql from "graphql-tag";

export default gql`
  query getNCOStationByID($input: GetNCOStationByIDInput) {
    getNCOStationByID(input: $input) {
      distanceAway
      distanceUnits
      directionCompass
      directionDegrees
      nCOStation {
        _id
        name
        loc {
          coordinates
        }
      }
    }
  }
`;
