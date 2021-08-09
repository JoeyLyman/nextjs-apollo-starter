import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField } from "@material-ui/core";
// Cookies
import Cookies from "js-cookie";

import { login } from "../../../../util/auth/auth";
import LoadingSpinner from "../../../Loading/Spinner";
// Components
import FormHeader from "../../Login/Components/FormHeader";
import SubmitButton from "../../Login/Components/SubmitButton";
import FormSwitchingButton from "../../Login/Components/FormSwitchingButton";

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

function ResetPasswordForm(props) {
  const classes = useStyles();

  const { urlToken, setCurrentForm } = props;
  const [errors, setErrors] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [resetPassword, { loading }] = useMutation(RESET_PASSWORD, {
    update(proxy, { data }) {
      console.log(`reset password data:`, data);
      if (data.resetPassword.success) {
        setCurrentForm({
          page: "Success",
          props: { token: data.resetPassword.token },
        });
        Cookies.set("token", data.resetPassword.token);
      } else {
        setCurrentForm({
          page: "Fail",
        });
      }

      console.log(`token:`, data.resetPassword.token);
      //login(userData);
      // router.push("/spots"); TODO: confirmemail page
    },
    onError(err) {
      console.log(`err:`, err);
      setErrors(err.graphQLErrors[0].extensions.exception.errors);

      if (err.graphQLErrors[0]) {
        console.log(`graoqrkafhdsakjsd`);
        setErrors(err.graphQLErrors[0].extensions.exception.errors);
      } else {
        console.log(err);
      }
    },
    variables: {
      input: {
        newPassword: password,
        token: urlToken,
      },
    },
  });

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
    const errorsThisSubmit = { ...errors };
    if (!password) {
      errorsThisSubmit.password = "Password cannot be empty.";
    }

    if (password !== confirmPassword) {
      console.log(`passwords dont match`);
      errorsThisSubmit.confirmPassword = "Confirm password does not match.";
    }

    if (!confirmPassword) {
      errorsThisSubmit.confirmPassword = "Confirm password cannot be empty.";
    }

    if (Object.keys(errorsThisSubmit).length !== 0) {
      setErrors(errorsThisSubmit);
    } else {
      console.log(`trying to reset password...`);
      resetPassword();
    }

    // if (
    //   Object.keys(errors).length === 0 &&
    //   password &&
    //   confirmPassword &&
    //   password === confirmPassword
    // ) {
    //   console.log(`trying to reset password...`);
    //   resetPassword();
    // }
  };

  return (
    <div className={classes.root}>
      {loading || showSpinner ? <LoadingSpinner /> : null}
      <form
        onSubmit={() => {}}
        //noValidate
        className={classes.form}
      >
        <FormHeader text="Update Password" />
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
          text="Update Password"
          //disabled={usernameOrEmail === "" || password === ""}
        />

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

const RESET_PASSWORD = gql`
  mutation resetPassword($input: ResetPasswordInput!) {
    resetPassword(input: $input) {
      code
      success
      message
      token
      user {
        _id
        username
        email {
          address
          confirmed
        }
      }
    }
  }
`;

export default React.memo(ResetPasswordForm);
