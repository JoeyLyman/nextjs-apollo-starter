import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField, Divider } from "@material-ui/core";

// Loading
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

function CreateAccountForm(props) {
  const classes = useStyles();

  const { setCurrentForm } = props;
  const [errors, setErrors] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const [signupCode, setSignupCode] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log(`username:`, username);
  console.log(`email:`, email);

  console.log(`password:`, password);
  console.log(`confirmPassword:`, confirmPassword);

  console.log(`errors:`, errors);
  const [addUser, { loading }] = useMutation(SIGNUP_USER, {
    update(proxy, { data: { signup } }) {
      console.log(`Signup data:`, signup);
      if (signup.success) {
        setCurrentForm({ page: "CreateAccountEmailSent", props: { email } });
        //router.push("/signedup");
      }
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
      signupCode,
      username,
      email,
      password,
      confirmPassword,
    },
  });

  const handleChangeSignupCode = (e) => {
    setSignupCode(e.target.value);
  };

  const handleChangeUsername = (e) => {
    const { username, ...remainingErrors } = errors;
    setErrors(remainingErrors);
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e) => {
    const { email, ...remainingErrors } = errors;
    setErrors(remainingErrors);
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    const { password, ...remainingErrors } = errors;
    setErrors(remainingErrors);
    setPassword(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    const { confirmPassword, ...remainingErrors } = errors;
    setErrors(remainingErrors);
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(`handle submit called`);
    if (!signupCode) {
      console.log(`no signup code..`);
      setErrors({
        ...errors,
        signupCode: "Signup code currently required.",
      });
    }
    if (!username) {
      console.log(`no username..`);
      setErrors({
        ...errors,
        username: "Username cannot be empty.",
      });
    }

    if (!email) {
      console.log(`no email or email..`);
      setErrors({
        ...errors,
        email: "Email cannot be empty.",
      });
    }
    if (!password) {
      console.log(`no password...`);
      setErrors({ ...errors, password: "Password cannot be empty." });
    }

    if (password !== confirmPassword) {
      console.log(`passwords dont match`);
      setErrors({
        ...errors,
        confirmPassword: "Confirm password does not match.",
      });
    }
    if (!confirmPassword) {
      console.log(`need to confirm password..`);
      setErrors({
        ...errors,
        confirmPassword: "Confirm password cannot be empty.",
      });
    }
    if (
      Object.keys(errors).length === 0 &&
      username &&
      email &&
      password &&
      confirmPassword &&
      password === confirmPassword
    ) {
      console.log(`trying to log in...`);
      addUser();
    }
  };

  return (
    <div className={classes.root}>
      {loading || showSpinner ? <LoadingSpinner /> : null}
      <form
        //onSubmit={handleSubmit}
        //noValidate
        className={classes.form}
      >
        <FormHeader text="Create Account" />

        <TextField
          value={signupCode}
          error={errors.signupCode ? true : false}
          onChange={handleChangeSignupCode}
          label="Signup Code"
          variant="outlined"
          className={classes.inputField}
        />

        <Divider
          style={{ width: 50, marginLeft: 12, marginTop: 8, marginBottom: 8 }}
        />

        <TextField
          value={username}
          error={errors.username ? true : false}
          onChange={handleChangeUsername}
          label="Username"
          variant="outlined"
          className={classes.inputField}
        />
        <TextField
          value={email}
          error={errors.email ? true : false}
          onChange={handleChangeEmail}
          label="Email"
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
        <TextField
          type="password"
          value={confirmPassword}
          error={errors.confirmPassword ? true : false}
          onChange={handleChangeConfirmPassword}
          label="Confirm Password"
          variant="outlined"
          className={classes.inputField}
        />

        <SubmitButton
          handleClick={handleSubmit}
          text="Create Account"
          //disabled={usernameOrEmail === "" || password === ""}
        />
        <Box style={{ marginTop: 32 }}>
          <FormSwitchingButton
            text="Have an account? Log in here."
            handleClick={() => setCurrentForm({ page: "Login" })}
          />
        </Box>

        {Object.keys(errors).length > 0 && (
          <div className="ui error message">
            <ul className="list">
              {Object.values(errors).map((value) => (
                <li key={value}>{value}</li>
              ))}
            </ul>
          </div>
        )}
      </form>
    </div>
  );
}

const SIGNUP_USER = gql`
  mutation signup(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    signup(
      input: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
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
    }
  }
`;

export default React.memo(CreateAccountForm);
