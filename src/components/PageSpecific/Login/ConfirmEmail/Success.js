import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper, Button, TextField } from "@material-ui/core";
import LoadingSpinner from "../../../Loading/Spinner";
import { login } from "../../../../util/auth/auth";

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
  loginButton: {
    width: "100%",
  },
}));

function ConfirmEmailSuccess(props) {
  const classes = useStyles();

  const { token } = props;
  const [showSpinner, setShowSpinner] = useState(false);

  const handleClickGoToHomepage = (e) => {
    login({ token });
    setShowSpinner(true);
  };

  return (
    //<div className={classes.root}>
    <Paper className={classes.root}>
      {showSpinner ? <LoadingSpinner /> : null}
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
            <h3>Email confirmed - Welcome to Yewtide! Yew!</h3>
          </Grid>

          <Grid item>
            <Button
              color="secondary"
              variant="contained"
              className={classes.loginButton}
              onClick={handleClickGoToHomepage}
            >
              Go to homepage
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
    //</div>
  );
}

export default React.memo(ConfirmEmailSuccess);
