import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import { useLayoutState } from "../../context/layout/layoutContext";
import {
  useScrollState,
  useScrollDispatch,
} from "../../context/layout/scrollContext";
// display hooks
import useWindowSize from "../../display/useWindowSize";
// Components
import TabBarContainer from "./Components/TabBarContainer";
// constants
import {
  TAB_BAR_HEIGHT,
  MOBILE_SCREEN_MAX_WIDTH,
} from "../../display/constants";

const HEADER_HEIGHT = 56;

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    color: "purple",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  },
  main: {},
  content: {
    width: "100%",
  },
  left: {
    marginTop: HEADER_HEIGHT, // USED TO BE PADDING TOP
    minWidth: "50%",
    //minHeight: "calc(100vh - 88px)",
    position: "relative", // USED TO NOT EXIST
    backgroundColor: theme.palette.background.list,
  },
  right: {
    //marginTop: HEADER_HEIGHT,

    // paddingTop: HEADER_HEIGHT,
    minWidth: "50%",
    //height: "100vh",
    //height: "calc(100vh - 88px)",
    //top: 88,
    position: "-webkit-sticky",
    position: "sticky",
  },
  timeline: {
    width: "100%",
    // position: "-webkit-sticky",
    // position: "sticky",
    // bottom: 0,
    //zIndex: 100,
    height: 48,
    backgroundColor: "green",
  },
  footer: {
    width: "100%",
    zIndex: 100,
  },
  tabBar: {
    //color: "purple",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
    bottom: 0,
  },
}));

function PrimaryLayout(props) {
  const {
    header,
    left,
    right,
    footer,
    isSecondaryBar = false,
    showTimeline,
    tabBar,
  } = props;
  const layout = useLayoutState();
  const classes = useStyles();
  const windowSize = useWindowSize();
  const scrollState = useScrollState();
  const scrollDispatch = useScrollDispatch();
  const scrollableContainerRef = React.useRef();

  const secondaryBarHeight = isSecondaryBar && layout.showSecondaryBar ? 32 : 0;
  const headerHeight = header ? 56 : 0;
  const navBarHeight = headerHeight + secondaryBarHeight;
  // DEP const navBarHeight = header && isSecondaryBar ? 88 : header ? 56 : 0;

  const isMobileView = windowSize.width < MOBILE_SCREEN_MAX_WIDTH;
  const showRight = layout.showRight && right ? true : false;

  const isMobileViewAndMapSelected = isMobileView && showRight ? true : false; // because if mobile view, only one can be shown
  const showLeft =
    layout.showLeft && left && !isMobileViewAndMapSelected ? true : false;

  const leftSideMinHeight = `calc(100vh - ${navBarHeight}px)`;

  const isBottom = (el) => {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  };

  const trackScrolling = () => {
    //console.log(`scroll state:`, scrollState);
    if (
      scrollableContainerRef.current &&
      isBottom(scrollableContainerRef.current) &&
      scrollState.atBottom !== true // dont update state if its already true
    ) {
      scrollDispatch({ type: "reachedBottom" });
    } else if (
      scrollableContainerRef.current &&
      scrollState.atBottom === true // dont update state if its already false
    ) {
      scrollDispatch({ type: "leftBottom" });
    }
  };

  React.useEffect(() => {
    document.addEventListener("scroll", trackScrolling);
    return () => document.removeEventListener("scroll", trackScrolling);
  }, [scrollState.atBottom]);

  return (
    <div id="primary-layout-root" className={classes.root}>
      <div id="primary-layout-header" className={classes.header}>
        {/* set height in header components */}
        {header}
      </div>

      <Box
        id="primary-layout-main"
        display="flex"
        alignItems="top"
        flexDirection="column"
        //flexWrap="nowrap"
        //justifyContent="start"
        alignItems="flex-start"
        className={classes.main}
        ref={scrollableContainerRef}
        //style={tabBar ? { marginBottom: TAB_BAR_HEIGHT } : null}
      >
        {/* <Box flexGrow={1} style={{ width: "100%" }}> */}
        <Box
          id="primary-layout-content"
          display="flex"
          alignItems="top"
          flexDirection="row"
          //flexWrap="nowrap"
          //justifyContent="start"
          alignItems="flex-start"
          className={classes.content}
        >
          {!showLeft ? null : (
            <Box
              id="primary-layout-left"
              flexGrow={1}
              className={classes.left}
              style={{
                marginTop: navBarHeight,
                minHeight: leftSideMinHeight,
              }}
            >
              {/* set height and it should overflow */}
              {left}
            </Box>
          )}
          {!showRight ? null : (
            <Box
              id="primary-layout-right"
              flexGrow={1}
              className={classes.right}
              style={{
                marginTop: navBarHeight,
                height: `calc(100vh - ${navBarHeight}px)`,
                top: navBarHeight,
              }}
            >
              {/* set height to 100% */}
              {right}
            </Box>
          )}
        </Box>
        {/* </Box> */}
        {false ? ( // TODO: this is cancelled out right now; showTimeline
          <Box id="primary-layout-timeline" className={classes.timeline}>
            {/* set height to desired footer height */}
            <Timeline />
          </Box>
        ) : null}

        <Box
          id="primary-layout-footer"
          className={classes.footer}
          //style={
          //   windowSize.width > MOBILE_SCREEN_MAX_WIDTH
          //     ? { marginBottom: 0 }
          //     : { marginBottom: TAB_BAR_HEIGHT }
          //       }
        >
          {/* set height to desired footer height */}
          {footer}
        </Box>
      </Box>
      <div id="primary-layout-tab-bar" className={classes.tabBar}>
        {/* set height in header components */}
        <TabBarContainer tabBar={tabBar} />

        {/* <Box id="primary-layout-timeline" className={classes.timeline}>
          <Timeline />
        </Box> */}
        {/* {tabBar} */}
      </div>
    </div>
  );
}

export default memo(PrimaryLayout);
