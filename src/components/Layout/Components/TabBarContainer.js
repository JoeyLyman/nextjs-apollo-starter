import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slide, Box } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// Context
import { useScrollState } from "../../../context/layout/scrollContext";

// Display hooks
import useWindowSize from "../../../display/useWindowSize";
import {
  MOBILE_SCREEN_MAX_WIDTH,
  TAB_BAR_HEIGHT,
} from "../../../display/constants";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   width: "100vw",
  //   height: TAB_BAR_HEIGHT,
  //   backgroundColor: theme.palette.primary.main,
  // },
  rootBox: {
    // boxShadow: `0px 0px 3px 2px ${theme.palette.primary.dark}`,
  },
  timelineBox: {
    width: "100%",
    boxShadow: `0px 0px 3px 2px ${theme.palette.primary.dark}`,

    // position: "-webkit-sticky",
    // position: "sticky",
    // bottom: 0,
    //zIndex: 100,
    height: 48,
  },
  tabBarBox: {
    zIndex: 100000000,
    //boxShadow: `0px 0px 3px 2px ${theme.palette.primary.dark}`,
  },
}));

const ContextWrapper = (props) => {
  const scrollState = useScrollState();

  return <TabBarContainer {...props} atBottom={scrollState.atBottom} />;
};

export default ContextWrapper;

const TabBarContainer = React.memo((props) => {
  const { atBottom, timeline, tabBar } = props;
  const classes = useStyles();
  const windowSize = useWindowSize();
  const isUnderMobileWidth = windowSize.width < MOBILE_SCREEN_MAX_WIDTH;
  //const trigger = useScrollTrigger();

  if (isUnderMobileWidth) {
    // for slide: mountOnEnter unmountOnExit
    // The Transition component's mountOnEnter property prevents the child component from being mounted until in is true. This prevents the relatively positioned component from scrolling into view from it's off-screen position. Similarly the unmountOnExit property removes the component from the DOM after it has been transition off screen.
    return (
      <Slide direction="up" in={!atBottom} mountOnEnter unmountOnExit>
        <Box display="flex" flexDirection="column" className={classes.rootBox}>
          {timeline ? (
            <Box
              //style={timeline ? {} : { height: 0 }}
              className={classes.timelineBox}
            >
              {timeline}
            </Box>
          ) : null}

          <Box className={classes.tabBarBox}>{tabBar}</Box>
        </Box>
      </Slide>
    );
  } else if (timeline) {
    return (
      <Slide direction="up" in={!atBottom} mountOnEnter unmountOnExit>
        <Box className={classes.rootBox}>
          <Box className={classes.timelineBox}>{timeline}</Box>
        </Box>
      </Slide>
    );
  } else {
    return null;
  }
});
