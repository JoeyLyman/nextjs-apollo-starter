import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { login } from "../../../../util/auth/auth";
// Components
import SubmitButton from "../../Login/Components/SubmitButton";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    direction: "column",
    padding: 16,
    margin: "auto",
    paddingTop: 8,
    paddingBottom: 8,
  },
  form: {
    height: "100%",
    width: "100%",
  },
  inputField: {
    width: "100%",
    marginTop: 12,
    marginBottom: 12,
  },
}));

function ResetPasswordSuccess(props) {
  const classes = useStyles();
  const router = useRouter();
  const { currentForm } = props;
  const [showSpinner, setShowSpinner] = useState(false);

  const handleClickGoToHomepage = (e) => {
    //login({ token: currentForm.props.token });
    setShowSpinner(true);
    router.push("/spots");
  };

  return (
    <div className={classes.root}>
      <form
        //onSubmit={handleSubmit}
        //noValidate
        className={classes.form}
      >
        <h3>Password updated. You are now logged in. Yew!</h3>
        <SubmitButton
          handleClick={handleClickGoToHomepage}
          text="Go to your homepage"
        />
      </form>
    </div>
  );
}

export default ResetPasswordSuccess;
