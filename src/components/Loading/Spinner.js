import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: "center",
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    left: 0,
    position: "fixed",
    top: 0,
    //transition: "opacity 0.3s linear",
    width: "100%",
    zIndex: 9998,
  },
  spinner: {
    top: "calc(50vh - 44px)",
    left: "calc(50vw - 22px)",
    color: "white",
    position: "absolute",
    zIndex: 9999,
  },
  fadedBackground: {
    alignItems: "center",
    background: "rgb(23, 22, 22)",
    opacity: 0.5,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    left: 0,
    position: "fixed",
    top: 0,
    //transition: "opacity 0.3s linear",
    width: "100%",
    zIndex: 9998,
  },
}));

export default function Spinner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.fadedBackground} />
      <CircularProgress color="secondary" className={classes.spinner} />
    </div>
  );
}
