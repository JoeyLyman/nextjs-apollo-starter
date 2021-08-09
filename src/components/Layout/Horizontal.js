import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

import { useLayoutState } from "../../context/layout/layoutContext";

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
  top: {
    width: "100%",
    position: "relative",
    //minHeight: "50vh",
    minHeight: "calc(60vh - 88px)",
    paddingTop: 0,
  },
  bottom: {
    width: "100%",
    height: "40vh",
    position: "-webkit-sticky",
    position: "sticky",
    bottom: 0,
    boxShadow: `0 0 6px 1px black`,
  },
  footer: {
    width: "100%",
    // position: "-webkit-sticky",
    // position: "sticky",
    // bottom: 0,
  },
}));

function HorizontalLayout(props) {
  const { header, top, bottom, footer, isSecondaryBar = false } = props;
  const layout = useLayoutState();
  const classes = useStyles();

  const navBarHeight = isSecondaryBar ? 88 : 56;

  const showTop = layout.showLeft && top;
  const showBottom = layout.showRight && bottom;

  return (
    <div id="horizontal-layout-root" className={classes.root}>
      <div id="horizontal-layout-header" className={classes.header}>
        {/* set height in header components */}
        {header}
      </div>

      <Box
        id="horizontal-layout-main"
        display="flex"
        alignItems="top"
        flexDirection="column"
        //flexWrap="nowrap"
        //justifyContent="start"
        alignItems="flex-start"
        className={classes.main}
      >
        {/* <Box flexGrow={1} style={{ width: "100%" }}> */}
        <Box
          id="horizontal-layout-content"
          display="flex"
          alignItems="top"
          flexDirection="column"
          //flexWrap="nowrap"
          //justifyContent="start"
          //alignItems="flex-start"
          className={classes.content}
        >
          {!showTop ? null : (
            <Box
              id="horizontal-layout-top"
              flexGrow={1}
              className={classes.top}
              //style={{ marginTop: navBarHeight, paddingTop: 0 }}
              style={
                !showBottom
                  ? { marginTop: navBarHeight, height: "calc(100vh - 88px)" } //height: "calc(100vh - 88px)"
                  : { marginTop: navBarHeight, height: "calc(60vh - 88px)" }
              }
            >
              {top}
            </Box>
          )}
          {!showBottom ? null : (
            <Box
              id="horizontal-layout-bottom"
              flexGrow={1}
              className={classes.bottom}
              style={
                !showTop
                  ? { paddingTop: navBarHeight, height: "calc(100vh)" }
                  : {}
              }
            >
              {bottom}
            </Box>
          )}
        </Box>
        {/* </Box> */}
        <Box id="horizontal-layout-footer" className={classes.footer}>
          {/* set height to desired footer height */}
          {footer}
        </Box>
      </Box>
    </div>
  );
}

export default memo(HorizontalLayout);
