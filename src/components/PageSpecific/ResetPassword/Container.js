import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// Components
import { ResetPasswordForm, Success, Fail } from "./Components";
import FormBackground from "../../Form/Backgrounds/TransparentBrown";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "calc(50% - 240px)",
    left: "calc(50% - 200px)",
    width: 400,
  },
}));

function ResestPasswordFormContainer(props) {
  const { urlToken } = props;
  const classes = useStyles();
  const [currentForm, setCurrentForm] = useState({ page: "ResetPasswordForm" });

  return (
    <Box className={classes.root}>
      <FormBackground />
      {currentForm.page === "ResetPasswordForm" ? (
        <ResetPasswordForm
          urlToken={urlToken}
          currentForm={currentForm}
          setCurrentForm={setCurrentForm}
        />
      ) : currentForm.page === "Success" ? (
        <Success currentForm={currentForm} setCurrentForm={setCurrentForm} />
      ) : currentForm.page === "Fail" ? (
        <Fail currentForm={currentForm} setCurrentForm={setCurrentForm} />
      ) : null}
    </Box>
  );
}

export default ResestPasswordFormContainer;
