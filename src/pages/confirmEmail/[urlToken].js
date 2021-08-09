import React, { useState } from "react";
import { useRouter } from "next/router";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
// import { Button, Form } from "semantic-ui-react";

import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Box } from "@material-ui/core";

import MenuBar from "../../components/NavBar/Containers/LoggedOut";
import Success from "../../components/Pages/Login/ConfirmEmail/Success";
import Fail from "../../components/Pages/Login/ConfirmEmail/Fail";

//import ResetPasswordForm from "../../components/Login/ResetPasswordForm";

//import SignupForm from "../components/Login/SignupForm";
// import { useForm } from "../components/Form/hooks";
// import { FormContainer } from "../components/Form/FormContainer";
// import { login } from "../util/auth/auth";
import { withApollo } from "../../data/withApollo";
// import { withAuthSync } from "../util/auth/auth";

const useStyles = makeStyles((theme) => ({
  root: {
    //height: "100vh",
    //width: "100vw",
  },
  headerBox: {
    height: 89,
    position: "absolute",
    top: 0,
    width: "100%",
    //width: "100%",
  },
  main: {
    paddingTop: 89,
  },
}));

function ConfirmEmailPage(props) {
  const classes = useStyles();
  const router = useRouter();
  const { success, token, errorMessage } = props;

  return (
    <div>
      <Box className={classes.headerBox}>
        <AppBar position="fixed">
          <MenuBar />
        </AppBar>
      </Box>
      <Box className={classes.main}>
        {success ? (
          <Success token={token} />
        ) : (
          <Fail errorMessage={errorMessage} />
        )}
      </Box>
    </div>
  );
}

ConfirmEmailPage.getInitialProps = async function (context) {
  //console.log(`client!!!:`, context.apolloClient);
  const { urlToken } = context.query;
  console.log(`token:`, urlToken);
  const res = await context.apolloClient.mutate({
    variables: { input: { token: urlToken } },
    mutation: gql`
      mutation confirmEmail($input: ConfirmEmailInput!) {
        confirmEmail(input: $input) {
          code
          success
          message
          user {
            username
            _id
            email {
              address
              confirmed
            }
          }
          token
        }
      }
    `,
  });

  console.log(`res:`, res);

  if (res.data.confirmEmail.success) {
    return {
      success: true,
      token: res.data.confirmEmail.token,
      errorMessage: null,
    };
  } else {
    return {
      success: false,
      token: null,
      errorMessage: res.data.confirmEmail.message,
    };
  }
  // if success
  // - login / set token
  // if fail
  // - show error / fail form
  // - button to login page
  return { urlToken };
};

// const CONFIRM_EMAIL = gql`
//   mutation confirmEmail($input: ConfirmEmailInput!) {
//     confirmEmail(input: $input) {
//       code
//       success
//       message
//       user
//     }
//   }
// `;

export default withApollo({ ssr: false })(ConfirmEmailPage);
