import gql from "graphql-tag";

export const GET_NW3_FORECASTS_BY_STATION_IDS = gql`
  query getNW3ForecastsByStationIDs($input: GetNW3ForecastsByStationIDsInput) {
    getNW3ForecastsByStationIDs(input: $input) {
      _id
      stationId
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

export const GET_NW3_FORECASTS_BY_LONG_LAT = gql`
  query getNW3ForecastsByStationIDs($input: GetNW3ForecastsByLongLatInput) {
    getNW3ForecastsByLongLat(input: $input) {
      _id
      stationId
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
