import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.light, //"#985d2c", //
    opacity: 0.7, //"transparent",
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 5,
    zIndex: -5,
  },
}));

function LoginFormBackground(props) {
  const {} = props;
  const classes = useStyles();

  return <div className={classes.root} />;
}

export default LoginFormBackground;
