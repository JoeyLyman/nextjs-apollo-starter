import gql from "graphql-tag";

export default gql`
  query getNCOTidePredictionsByStationID(
    $input: GetNCOTidePredictionsByStationIDInput
  ) {
    getNCOTidePredictionsByStationID(input: $input) {
      _id
      updatedAt
      day
      datum
      units
      hourlyLevels {
        time
        level
      }
      peaks {
        time
        level
        peakType
      }
      station {
        stationId
        name
        loc {
          type
          coordinates
        }
      }
    }
  }
`;
