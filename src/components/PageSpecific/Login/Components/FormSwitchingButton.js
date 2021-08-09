import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "Capitalize",
    minWidth: 20,
  },
}));

function FormSwitchingButton(props) {
  const { text, handleClick } = props;
  const classes = useStyles();

  return (
    <Button size="small" onClick={handleClick} className={classes.root}>
      {text}
    </Button>
  );
}

export default FormSwitchingButton;
