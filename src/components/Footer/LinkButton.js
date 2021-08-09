import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "&:hover": {
      textDecoration: "underline",
    },
  },
}));

function LinkButton(props) {
  const { text, url, small = false } = props;
  const classes = useStyles();

  return (
    <Link href={url}>
      <Typography
        variant={small ? "subtitle2" : "subtitle1"}
        className={classes.root}
      >
        {text}
      </Typography>
      {/* <a className={classes.optionText}>{option.label}</a> */}
    </Link>
  );
}

export default LinkButton;
