import gql from "graphql-tag";

export default gql`
  query getNW3ForecastsByStationIDs($input: GetNW3ForecastsByStationIDsInput) {
    getNW3ForecastsByStationIDs(input: $input) {
      _id
      loc {
        type
        coordinates
      }
      model
      cycleDate
      date
      totalSignificantWaveHeight
      numberSignificantWaves
      numberSignificantWavesNotInTable
      swells {
        significantHeight
        peakPeriod
        meanDirection
        dueToLocalWindsProbable
      }
    }
  }
`;
