import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    //width: 200,
    //border: "1px solid pink",
    margin: 6,
  },
  button: {
    color: theme.palette.primary.contrastTextLight,
    // border: "1px solid purple",
    textTransform: "Capitalize",
    width: "100%",
    "&:hover": {
      color: theme.palette.primary.contrastText,
    },
  },
}));

function TabBarMenuButton(props) {
  const { text, icon, handleClick } = props;
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="flex-start"
      className={classes.root}
    >
      <Button startIcon={icon} onClick={handleClick} className={classes.button}>
        {text}
      </Button>
    </Box>
  );
}

export default TabBarMenuButton;
