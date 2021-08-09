import gql from "graphql-tag";

export default gql`
  mutation joinWaitlist($input: JoinWaitlistInput!) {
    joinWaitlist(input: $input) {
      code
      success
      message
    }
  }
`;
