import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: 24,
  },
}));

function LoginFormHeader(props) {
  const { text } = props;
  const classes = useStyles();

  return (
    <Typography variant="h4" className={classes.root}>
      {text}
    </Typography>
  );
}

export default LoginFormHeader;
