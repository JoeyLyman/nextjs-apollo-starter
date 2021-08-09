import gql from "graphql-tag";

export const GET_NW3_STATIONS = gql`
  query getNW3Stations($models: [NW3ModelEnum], $limit: Int) {
    getNW3Stations(input: { models: $models, limit: $limit }) {
      _id
      regions
      models
      loc {
        coordinates
      }
    }
  }
`;

export const GET_NW3_STATIONS_BY_REGION = gql`
  query getNW3StationsByRegion(
    $regions: [NW3RegionEnum]
    $models: [NW3ModelEnum]
    $limit: Int
  ) {
    getNW3StationsByRegion(
      input: { regions: $regions, models: $models, limit: $limit }
    ) {
      _id
      regions
      models
      loc {
        coordinates
      }
    }
  }
`;
