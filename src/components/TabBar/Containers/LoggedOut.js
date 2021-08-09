import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// Display hooks
import useWindowSize from "../../../display/useWindowSize";
import {
  MOBILE_SCREEN_MAX_WIDTH,
  TAB_BAR_HEIGHT,
} from "../../../display/constants";

import LoginButton from "../LoggedOutButtonContainers/LoginButton";
import HomeButton from "../LoggedOutButtonContainers/HomeButton";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: TAB_BAR_HEIGHT,
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0px 0px 3px 2px ${theme.palette.primary.dark}`,
  },
}));

function TabBar(props) {
  const {} = props;
  const classes = useStyles();
  const windowSize = useWindowSize();
  const isUnderMobileWidth = windowSize.width < MOBILE_SCREEN_MAX_WIDTH;

  if (isUnderMobileWidth) {
    return (
      <Box
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        className={classes.root}
      >
        <Box style={{ marginLeft: 12, marginRight: 12 }}>
          <HomeButton />
        </Box>
        <Box style={{ marginLeft: 12, marginRight: 12 }}>
          <LoginButton />
        </Box>
      </Box>
    );
  }
  return null;
}

export default TabBar;
