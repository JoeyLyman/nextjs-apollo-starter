import React, { useState } from "react";
// Next
import { useRouter } from "next/router";
// Apollo
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
// Material UI
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField } from "@material-ui/core";
// Util
import { login } from "../../../util/auth/auth";
// Loading Component
import LoadingSpinner from "../../Loading/Spinner";
// Components
import FormHeader from "./Components/FormHeader";
import SubmitButton from "./Components/SubmitButton";
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

function LoginForm(props) {
  const classes = useStyles();
  const router = useRouter();

  const { setCurrentForm } = props;
  const [errors, setErrors] = useState({});
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [showSpinner, setShowSpinner] = useState(false);

  const handleLogin = (token) => {
    login(token);
    //setLoading(true);
  };

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(proxy, { data: { login: userData } }) {
      //setShowSpinner(true);
    },
    onCompleted(data) {
      const token = data.login.token;
      handleLogin(token);
    },
    onError(err) {
      console.log(`err object:`, err.graphQLErrors[0]);
      setErrors({ graphql: err.graphQLErrors[0].message });
    },
    variables: {
      usernameOrEmail,
      password,
    }, //values,
  });

  const handleChangeUsernameOrEmail = (e) => {
    const { usernameOrEmail, ...remainingErrors } = errors;
    setErrors(remainingErrors);
    setUsernameOrEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    const { password, ...remainingErrors } = errors;
    setErrors(remainingErrors);
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    if (!usernameOrEmail) {
      console.log(`no username or email..`);
      setErrors({
        ...errors,
        usernameOrEmail: "Username or email cannot be empty.",
      });
    }
    if (!password) {
      console.log(`no password...`);
      setErrors({ ...errors, password: "Password cannot be empty." });
    }
    if (Object.keys(errors).length === 0 && usernameOrEmail && password) {
      console.log(`trying to log in...`);
      loginUser();
    }
  };

  return (
    <div className={classes.root}>
      {loading ? <LoadingSpinner /> : null}
      <form
        //onSubmit={handleSubmit}
        //noValidate
        className={classes.form}
      >
        <FormHeader text="Log in" />

        <TextField
          value={usernameOrEmail}
          error={errors.usernameOrEmail || errors.general ? true : false}
          onChange={handleChangeUsernameOrEmail}
          label="Username or Email"
          variant="outlined"
          className={classes.inputField}
        />
        <TextField
          type="password"
          value={password}
          error={errors.password ? true : false}
          onChange={handleChangePassword}
          label="Password"
          variant="outlined"
          className={classes.inputField}
        />
        <SubmitButton
          handleClick={handleSubmit}
          text="Log in"
          disabled={usernameOrEmail === "" || password === ""}
        />
        <Box display="flex" flexDirection="row" style={{ marginTop: 32 }}>
          <Box flexGrow={1}>
            <FormSwitchingButton
              text="Create account"
              handleClick={() => setCurrentForm({ page: "CreateAccount" })}
            />
          </Box>

          <FormSwitchingButton
            text="Forgot your info?"
            handleClick={() => setCurrentForm({ page: "ForgotInfo" })}
          />
        </Box>
      </form>
    </div>
  );
}

const LOGIN_USER = gql`
  mutation login($usernameOrEmail: String!, $password: String!) {
    login(input: { usernameOrEmail: $usernameOrEmail, password: $password }) {
      code
      success
      message
      user {
        _id
        username
        email {
          address
          confirmed
        }
        phoneNumber
      }
      token
    }
  }
`;

export default React.memo(LoginForm);
