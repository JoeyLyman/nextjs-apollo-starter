import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import LoadingSpinner from "../../Loading/Spinner";

const useStyles = makeStyles((theme) => ({
  root: {
    //height: "100%",
    //width: "100%",
    background: "transparent",
    display: "flex",
    direction: "column",
    maxWidth: 400,
    margin: "auto",
  },
  form: {
    padding: theme.spacing(2),
    height: "100%",
    width: "100%",
  },
  formPaper: {
    //position: "absolute",
    background: "transparent",
    display: "flex",
    direction: "column",
    maxWidth: 400,
    margin: "auto",
  },
  inputField: {
    width: "100%",
  },
  submitButton: {
    width: "100%",
  },
}));

function CreateAccountEmailSent(props) {
  const classes = useStyles();

  const { currentForm, setCurrentForm } = props;
  const [showSpinner, setShowSpinner] = useState(false);
  const [errors, setErrors] = useState({});

  console.log(`errors:`, errors);
  console.log(`currentForm:`, currentForm);
  const [resendEmail, { loading }] = useMutation(RESEND_CONFIRM_EMAIL_EMAIL, {
    update(proxy, data) {
      console.log(`resend email data:`, data);
      // if (signup.success) {
      //   setCurrentForm("CreateAccountEmailSent");
      //   //router.push("/signedup");
      // }
      // login(userData);
      // router.push("/spots"); TODO: confirmemail page
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
    //<div className={classes.root}>
    <Paper className={classes.root}>
      {loading || showSpinner ? <LoadingSpinner /> : null}
      <form
        //onSubmit={handleSubmit}
        //noValidate
        className={classes.form}
      >
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item>
            <h3>
              Confirmation email sent to {currentForm.props.email}. Follow the
              link in the email to confirm your account
            </h3>
          </Grid>

          <Grid item>
            <h4>Didn't receive the email?</h4>
            <Button
              //color="secondary"
              //variant="contained"
              //className={classes.submitButton}
              onClick={handleClickResendEmail}
            >
              Resend Email
            </Button>
          </Grid>
          <Grid item>
            <Button onClick={() => setCurrentForm("Login")}>Login Here.</Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    //</div>
  );
}

const RESEND_CONFIRM_EMAIL_EMAIL = gql`
  mutation resendConfirmEmailEmail($input: ResendConfirmEmailEmailInput!) {
    resendConfirmEmailEmail(input: $input) {
      code
      success
      message
      email
    }
  }
`;

export default React.memo(CreateAccountEmailSent);
