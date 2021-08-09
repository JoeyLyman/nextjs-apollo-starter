import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
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

function ResetPasswordFail(props) {
  const classes = useStyles();
  const router = useRouter();
  const handleClickGoToLogin = (e) => {
    router.push("/login");
  };

  return (
    <div className={classes.root}>
      <form
        //onSubmit={handleSubmit}
        //noValidate
        className={classes.form}
      >
        <h3>Error: password not updated. Link is expired.</h3>
        <SubmitButton
          handleClick={handleClickGoToLogin}
          text="Go to login page"
        />
      </form>
    </div>
  );
}

export default React.memo(ResetPasswordFail);
