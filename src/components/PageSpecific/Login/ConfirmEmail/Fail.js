import React, { useState } from "react";
import Router from "next/router";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import LoadingSpinner from "../../../Loading/Spinner";

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

function ConfirmEmailFail(props) {
  const classes = useStyles();

  const { currentForm, setCurrentForm, errorMessage } = props;
  const [showSpinner, setShowSpinner] = useState(false);

  const handleClickGoToLoginForm = (e) => {
    Router.push("/login");
  };

  return (
    //<div className={classes.root}>
    <Paper className={classes.root}>
      {showSpinner ? <LoadingSpinner /> : null}
      <form className={classes.form}>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item>
            <h3>Error: {errorMessage}</h3>
          </Grid>

          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              className={classes.submitButton}
              onClick={handleClickGoToLoginForm}
            >
              Go to login page
            </Button>
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

export default React.memo(ConfirmEmailFail);
