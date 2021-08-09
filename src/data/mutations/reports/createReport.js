import gql from "graphql-tag";

export default gql`
  mutation createReport($input: CreateReportInput) {
    createReport(input: $input) {
      code
      success
      message
      report {
        _id
        userID
        spotID
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
