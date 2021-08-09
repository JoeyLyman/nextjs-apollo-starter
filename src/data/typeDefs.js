import gql from "graphql-tag";

const gqlServerTypeDefs = gql`
  enum SpotsSortOrders {
    ALPHABETICAL
    REPORTS_COUNT
    LOCATION
  }

  enum NW3ModelEnum {
    multi_1
    nww3
    akw
    wna
    nah
    enp
  }

  enum NW3RegionEnum {
    Atlantic
    Pacific
    Indian
    NEAtlantic
    NWAtlantic
    USEastCoast
    NEPacific
    Alaska
    AustraliaIndonesia
    GulfOfMexico
    KeyWest
    PuertoRico
    USWestCoastZoom1
    USWestCoastZoom2
    Hawaii
  }

  input SpotsSearchSelectionsInput {
    spots: [ID]
    categories: [String]
    boundingBoxes: [[Float]]
  }

  input GetNW3ForecastsByStationIDsInput {
    stationIDs: [String]
    dateStart: Date
    duration: Date
    models: [NW3ModelEnum]
  }

  input GetNW3ForecastsByLongLatInput {
    long: Float
    lat: Float
    dateStart: Date
    duration: Date
    stationLimit: Int
    models: [NW3ModelEnum]
  }

  input GetNWSForecastsByUrlInput {
    url: String
    dateStart: Date
    duration: Int
  }

  input GetNRtReadingsByStationIDsInput {
    stationIDs: [String]
    dateStart: Date
    duration: Date
  }

  input GetNCOTidePredictionsByStationIDInput {
    stationId: String
    dateStart: Date
    duration: Int
  }

  input CreateSpotInput {
    name: String
    coordinates: [Float]
    notes: String
    includeAllFriends: Boolean
    includeSelectedFriends: [ID]
    nW3StationsIDsPriority: [ID]
  }

  input CreateReportInput {
    units: String
    spotID: ID!
    spotName: String
    spotLoc: PointInput
    date: Date
    duration: Float
    surfed: Boolean
    size: [ReportMetricRangeInput]
    rideLength: [ReportMetricStandardInput]
    cleanliness: [ReportMetricStandardInput]
    consistency: [ReportMetricStandardInput]
    idealBoard: [ReportMetricStandardInput]
    barrels: [ReportMetricStandardInput]
    airSections: [ReportMetricStandardInput]
    safety: [ReportMetricStandardInput]
    notes: String
    boardsUsed: [BoardUsedInput]
    surfedWith: [SurfedWithInput]
  }

  input ReportMetricStandardInput {
    date: Date
    value: Float
  }

  input ReportMetricRangeInput {
    date: Date
    valueMin: Float
    valueMax: Float
  }

  input SurfedWithInput {
    userID: ID
    userName: String
  }

  input BoardUsedInput {
    boardID: ID
    boardName: String
  }

  input ConfirmEmailInput {
    token: String
  }

  input ResendConfirmEmailEmailInput {
    email: String
  }

  input ReceivedEmailByMistakeInput {
    token: String
  }

  input SendResetPasswordEmailInput {
    email: String!
  }

  input ResetPasswordInput {
    token: String!
    newPassword: String!
  }

  input PointInput {
    long: Float
    lat: Float
  }

  input GetSpotsInput {
    skip: Int
    limit: Int
    includeMy: Boolean
    includeAllFriends: Boolean
    includeSelectedFriends: [ID]
    sortOrder: String
    sortReverse: Boolean
    location: PointInput
    spotsSearchSelections: SpotsSearchSelectionsInput
  }

  input GetReportsInput {
    dateRangeReports: [Date]
    showSwell: Boolean
    showWind: Boolean
    showTide: Boolean
    includeMy: Boolean
    includeAllFriends: Boolean
    includeSelectedFriends: [ID]
    sortOrderReports: String
    sortReverse: Boolean
    specificSpots: [ID]
    location: PointInput
  }

  input GetUserProfileInput {
    username: String
  }

  input SearchUsersInput {
    skip: Int
    limit: Int
    searchText: String!
    sortOrder: String
    includeMyself: Boolean
    includeFriends: Boolean
    includeOffers: Boolean
    includeOffered: Boolean
    includePotentials: Boolean
  }

  type GetReportsQueryResponse {
    _id: ID!
    updatedAt: [Date]
    units: String
    user: UserSnippet
    spot: SpotSnippet
    date: Date
    duration: Float
    surfed: Boolean
    size: [ReportMetricRange]
    rideLength: [ReportMetricStandard]
    cleanliness: [ReportMetricStandard]
    consistency: [ReportMetricStandard]
    idealBoard: [ReportMetricStandard]
    barrels: [ReportMetricStandard]
    airSections: [ReportMetricStandard]
    safety: [ReportMetricStandard]
    notes: String
    boardsUsed: [String]
    surfedWith: [UserSnippet]
    isDeleted: Boolean
    spotLookup: Spot
    nW3StationsPriority: [NW3StationSnippet]
    nCOStationsPriority: [NCOStationSnippet]
    nWSGridpointsPriority: [NWSGridpointSnippet]
    topNW3Station: NW3Station
    topNCOStation: NCOStation
    topNWSGridpoint: NWSGridpoint
    nW3Forecasts: [NW3Forecast]
    nCOTidePredictions: [NCOTidePrediction]
    nWSForecasts: [NWSForecast]
  }

  type GetNW3StationsByLongLatOutput {
    distanceAway: Float
    nW3Station: NW3Station
  }

  type NW3Station {
    _id: ID!
    regions: [NW3RegionEnum]
    models: [NW3ModelEnum]
    loc: Point
    forecasts(input: NW3StationForecastsInput): [NW3Forecast]
  }

  type Point {
    type: String
    coordinates: [Float]
  }

  input NW3StationForecastsInput {
    dateStart: Date
    duration: Int
  }

  input UpdateProfilePictureUrlInput {
    url: String
    publicID: String
  }
`;

export default gqlServerTypeDefs;
