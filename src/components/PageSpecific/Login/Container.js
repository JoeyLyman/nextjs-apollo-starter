import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// nextjs
import { useRouter } from "next/router";
// login
import { login, logout } from "../../../util/auth/auth";

// Forms
import LoginForm from "./LoginForm";
import CreateAccountForm from "./CreateAccountForm";
import CreateAccountEmailSent from "./CreateAccountEmailSent";
import ForgotInfoForm from "./ForgotInfoForm";
import ForgotInfoEmailSent from "./ForgotInfoEmailSent";
// Components

const useStyles = makeStyles((theme) => ({
  formRoot: {
    //position: "relative",
    //top: "calc(140px)",
    //left: "calc(50% - 250px)",
    //margin: "auto",
    //width: 300,
    maxWidth: 800,
    zIndex: 1000,
  },
  logoBox: {
    position: "fixed",
    top: 28,
    right: 28, //190,
    cursor: "pointer",
    zIndex: 1000,
  },
}));

function LoginFormContainer(props) {
  const classes = useStyles();
  const router = useRouter();

  const [currentForm, setCurrentForm] = useState({ page: "Login" });

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      //style={{ minHeight: "100vh" }}
    >
      <Box className={classes.formRoot}>
        {/* <FormBackground /> */}

        {currentForm.page === "Login" ? (
          <LoginForm
            currentForm={currentForm}
            setCurrentForm={setCurrentForm}
          />
        ) : currentForm.page === "CreateAccount" ? (
          <CreateAccountForm
            currentForm={currentForm}
            setCurrentForm={setCurrentForm}
          />
        ) : currentForm.page === "ForgotInfo" ? (
          <ForgotInfoForm
            currentForm={currentForm}
            setCurrentForm={setCurrentForm}
          />
        ) : currentForm.page === "CreateAccountEmailSent" ? (
          <CreateAccountEmailSent
            currentForm={currentForm}
            setCurrentForm={setCurrentForm}
          />
        ) : currentForm.page === "ForgotInfoEmailSent" ? (
          <ForgotInfoEmailSent
            currentForm={currentForm}
            setCurrentForm={setCurrentForm}
          />
        ) : null}
      </Box>
    </Box>
  );
}

export default LoginFormContainer;
