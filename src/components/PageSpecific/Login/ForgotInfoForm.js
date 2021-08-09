import React, { useState } from "react";
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";
import { makeStyles } from "@material-ui/core/styles";
import { Box, TextField } from "@material-ui/core";
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

function ForgotInfoForm(props) {
  const classes = useStyles();

  const { setCurrentForm } = props;
  const [errors, setErrors] = useState({});
  const [showSpinner, setShowSpinner] = useState(false);
  const [email, setEmail] = useState("");

  const [sendEmail, { loading }] = useMutation(SEND_RESET_PASSWORD_EMAIL, {
    update(proxy, data) {
      console.log(`proxy:`, proxy);
      console.log(`result.data`, data);
      if (data.data.sendResetPasswordEmail.code == 200) {
        setShowSpinner(true);
        setCurrentForm({ page: "ForgotInfoEmailSent", props: { email } });
      } else {
        setErrors({ email: data.data.sendResetPasswordEmail.message });
      }
      // pass mutation response to login function; it extracts token from response
      //login(userData);
    },
    onError(err) {
      console.log(`err object:`, err);
      // setErrors(err.graphQLErrors[0].extensions.exception.errors);
    },
    variables: {
      input: {
        email,
      },
    },
  });

  const handleChangeEmail = (e) => {
    const { email, ...remainingErrors } = errors;
    setErrors(remainingErrors);
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log(`handle submit called`);
    if (!email) {
      console.log(`no email..`);
      setErrors({
        ...errors,
        email: "Email cannot be empty.",
      });
    }
    if (Object.keys(errors).length === 0 && email) {
      console.log(`trying to send email...`);
      sendEmail();
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
        <FormHeader text="Send Email to Reset Password" />
        <TextField
          value={email}
          error={errors.email ? true : false}
          onChange={handleChangeEmail}
          label="Email Address"
          variant="outlined"
          className={classes.inputField}
        />
        <SubmitButton
          handleClick={handleSubmit}
          text="Send Email"
          //disabled={usernameOrEmail === "" || password === ""}
        />
        <Box display="flex" flexDirection="row" style={{ marginTop: 32 }}>
          <Box flexGrow={1}>
            <FormSwitchingButton
              text="Login"
              handleClick={() => setCurrentForm({ page: "Login" })}
            />
          </Box>

          <FormSwitchingButton
            text="Create account"
            handleClick={() => setCurrentForm({ page: "CreateAccount" })}
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

export default React.memo(ForgotInfoForm);
