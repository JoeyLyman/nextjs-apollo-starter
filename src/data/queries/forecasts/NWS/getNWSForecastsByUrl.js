import gql from "graphql-tag";

export default gql`
  query getNWSForecastsByUrl($input: GetNWSForecastsByUrlInput) {
    getNWSForecastsByUrl(input: $input) {
      forecasts {
        windDirection {
          uom
          value
        }
        windSpeed {
          uom
          value
        }
        windGust {
          uom
          value
        }
        date
        forecastedAt
        polygon {
          type
          coordinates
        }
      }
      source
    }
  }
`;
