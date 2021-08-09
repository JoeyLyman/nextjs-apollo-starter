import gql from "graphql-tag";

const gqlServerTypeDefs = gql`
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

  type Point {
    type: String
    coordinates: [Float]
  }

  input UpdateProfilePictureUrlInput {
    url: String
    publicID: String
  }
`;

export default gqlServerTypeDefs;
