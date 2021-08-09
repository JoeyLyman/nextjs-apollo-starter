import gql from "graphql-tag";

export default gql`
  query getReports($input: GetReportsInput) {
    getReports(input: $input) {
      totalCount {
        value
      }
      reports {
        _id
        userID
        user {
          username
          profilePicture {
            publicID
          }
        }
        spotID
        spot {
          _id
          name
          loc {
            coordinates
          }
          nW3StationsPriority
          nCOStationsPriority
          nWSGridpoint {
            gridpoint {
              forecastUrl
              polygon {
                type
                coordinates
              }
            }
          }
        }
        date
        duration
        units
        updatedAt
        metrics {
          sizeRangeData {
            date
            min
            max
          }
          shapeData {
            date
            value
          }
          surfaceTextureData {
            date
            value
          }
          consistencyData {
            date
            value
          }
          airSectionsData {
            date
            value
          }
          barrelsData {
            date
            value
          }
          openFacesData {
            date
            value
          }
          idealBoardData {
            date
            value
          }
          impactDangerData {
            date
            value
          }
          currentData {
            date
            value
          }
          backwashData {
            date
            value
          }
        }
        notes {
          surfed
          allTime
          notes {
            fullString
            usernameTagString
            remainingString
            taggedBuddy
          }
        }
      }
    }
  }
`;
