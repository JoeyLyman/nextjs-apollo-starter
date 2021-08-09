import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// Loading Component
import LoadingSpinner from "../../Loading/Spinner";
// Components
import FormSwitchingButton from "./Components/FormSwitchingButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    direction: "column",
    padding: 16,
    margin: "auto",
  },
  form: {
    padding: theme.spacing(2),
    height: "100%",
    width: "100%",
  },
  inputField: {
    width: "100%",
    marginTop: 12,
    marginBottom: 12,
  },
}));

function ForgotInfoEmailSent(props) {
  const classes = useStyles();

  const { currentForm, setCurrentForm } = props;
  const [showSpinner, setShowSpinner] = useState(false);
  const [errors, setErrors] = useState({});

  const [resendEmail, { loading }] = useMutation(SEND_RESET_PASSWORD_EMAIL, {
    update(proxy, data) {
      console.log(`resend email data:`, data);
    },
    onError(err) {
      console.log(`err:`, err);
      if (err.graphQLErrors[0]) {
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      } else {
        console.log(err);
      }
    },
    variables: {
      email: currentForm.props.email,
    },
  });

  const handleClickResendEmail = (e) => {
    resendEmail(currentForm.props.email);
  };

  return (
    <div className={classes.root}>
      {loading || showSpinner ? <LoadingSpinner /> : null}
      <form
        //onSubmit={handleSubmit}
        //noValidate
        className={classes.form}
      >
        <h3 style={{ marginBottom: 32, marginTop: 0 }}>
          Reset password link sent to {currentForm.props.email}. Follow the link
          in the email to reset your password.
        </h3>

        <Box
          display="flex"
          flexDirection="column"
          style={{ width: "100%" }}
          justifyContent="center"
        >
          <FormSwitchingButton
            text="Go to login page"
            handleClick={() => setCurrentForm({ page: "Login" })}
          />
          <div style={{ height: 12 }} />
          <FormSwitchingButton
            text="Resend email"
            handleClick={handleClickResendEmail}
          />
        </Box>
      </form>
    </div>
  );
}

const SEND_RESET_PASSWORD_EMAIL = gql`
  mutation sendResetPasswordEmail($input: SendResetPasswordEmailInput!) {
    sendResetPasswordEmail(input: $input) {
      code
      success
      message
      email
    }
  }
`;

export default React.memo(ForgotInfoEmailSent);
