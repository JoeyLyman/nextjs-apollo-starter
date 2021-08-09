import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
// display
import { TAB_BAR_HEIGHT } from "../../display/constants";
// Components

const HEADER_HEIGHT = 56;

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {
    color: "purple",
    position: "fixed",
    width: "100%",
    zIndex: 1000,
  },
  main: {
    marginBottom: TAB_BAR_HEIGHT,
  },
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
    height: "calc(100vh - 88px)",
    position: "-webkit-sticky",
    position: "sticky",
    top: 88,
  },
  timeline: {
    width: "100%",
    position: "-webkit-sticky",
    position: "sticky",
    bottom: 0,
    zIndex: 100,
    height: 48,
    backgroundColor: "green",
  },
  footer: {
    width: "100%",
    zIndex: 100,
  },
}));

function PrimaryLayout(props) {
  const { header, centerForm, tabBar, background, footer } = props;
  const classes = useStyles();

  const navBarHeight = header && isSecondaryBar ? 88 : header ? 56 : 0;

  const leftSideMinHeight = `calc(100vh - ${navBarHeight}px)`;

  return (
    <div id="primary-layout-root" className={classes.root}>
      <div id="primary-layout-header" className={classes.header}>
        {/* set height in header components */}
        {header}
      </div>

      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        //flexWrap="nowrap"
        justifyContent="center"
        justifyContent="center"
        className={classes.main}
      >
        {centerForm}
      </Box>
      <Box style={{ position: "fixed", bottom: 0, zIndex: 100000000 }}>
        {tabBar}
      </Box>
    </div>
  );
}

export default memo(PrimaryLayout);
