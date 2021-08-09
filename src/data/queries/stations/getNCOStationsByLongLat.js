import gql from "graphql-tag";

export default gql`
  query getNCOStationsByLongLat($input: GetNCOStationsByLongLatInput) {
    getNCOStationsByLongLat(input: $input) {
      distanceAway
      nCOStation {
        _id
        name
        stationType
        loc {
          coordinates
        }
        dataTypes {
          predictions {
            sensorId
            dcp
            status
            updatedAt
            hiloDataAvailability
            hourlyDataAvailability
          }
        }
      }
    }
  }
`;
