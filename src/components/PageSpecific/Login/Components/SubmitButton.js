import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    textTransform: "Capitalize",
    width: "100%",
  },
}));

function SubmitButton(props) {
  const { text, handleClick, disabled } = props;
  const classes = useStyles();

  return (
    <Tooltip title={disabled ? "Please enter information above." : "yew!"}>
      <div style={{ marginTop: 12, marginBottom: 12 }}>
        <Button
          color="secondary"
          variant="contained"
          onClick={handleClick}
          className={classes.root}
          disabled={disabled}
        >
          {text}
        </Button>
      </div>
    </Tooltip>
  );
}

export default SubmitButton;
