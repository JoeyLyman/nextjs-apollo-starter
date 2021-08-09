import React, { useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slide, Box, Grid } from "@material-ui/core";

import useScrollTrigger from "@material-ui/core/useScrollTrigger";
// Context
import { useScrollState } from "../../../context/layout/scrollContext";

// Display
import useWindowSize from "../../../display/useWindowSize";
import {
  MOBILE_SCREEN_MAX_WIDTH,
  TAB_BAR_HEIGHT,
} from "../../../display/constants";

// Buttons
import SpotsButton from "../LoggedInButtonContainers/Spots";
import ReportsButton from "../LoggedInButtonContainers/Reports";
import BuddiesButton from "../LoggedInButtonContainers/Buddies";
import AddButton from "../LoggedInButtonContainers/Add";
import ProfileButton from "../LoggedInButtonContainers/Profile";

// Menus
import AddMenu from "../MenuContainers/AddMenu";
import ProfileMenu from "../MenuContainers/ProfileMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: TAB_BAR_HEIGHT,
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0px 0px 3px 2px ${theme.palette.primary.dark}`,
  },

  fadedBackground: {
    alignItems: "center",
    background: "rgb(23, 22, 22)",
    opacity: 0.6,
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    left: 0,
    position: "fixed",
    top: 0,
    //transition: "opacity 0.3s linear",
    width: "100%",
    zIndex: -9998,
  },
}));

const ContextWrapper = (props) => {
  const scrollState = useScrollState();

  return <TabBar {...props} atBottom={scrollState.atBottom} />;
};

export default ContextWrapper;

const TabBar = React.memo((props) => {
  const { atBottom } = props;
  const classes = useStyles();
  const [addMenuOpen, setAddMenuOpen] = useState();
  const [profileMenuOpen, setProfileMenuOpen] = useState();
  const windowSize = useWindowSize();
  const isUnderMobileWidth = windowSize.width < MOBILE_SCREEN_MAX_WIDTH;
  //const trigger = useScrollTrigger();

  const handleClickAway = (e) => {
    setAddMenuOpen(false);
    setProfileMenuOpen(false);
  };

  if (isUnderMobileWidth) {
    // for slide: mountOnEnter unmountOnExit
    // The Transition component's mountOnEnter property prevents the child component from being mounted until in is true. This prevents the relatively positioned component from scrolling into view from it's off-screen position. Similarly the unmountOnExit property removes the component from the DOM after it has been transition off screen.
    return (
      <div>
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="center"
          className={classes.root}
        >
          <Grid item>
            <SpotsButton />
          </Grid>
          <Grid item>
            <ReportsButton />
          </Grid>
          <Grid item>
            <BuddiesButton />
          </Grid>
          <Grid item>
            <AddButton
              handleClick={() => {
                setAddMenuOpen(!addMenuOpen);
                setProfileMenuOpen(false);
              }}
            />
          </Grid>
          <Grid item>
            <ProfileButton
              handleClick={() => {
                setProfileMenuOpen(!profileMenuOpen);
                setAddMenuOpen(false);
              }}
            />
          </Grid>
        </Grid>
        {/* <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          className={classes.root}
        >
          <Box style={{ marginLeft: 0, marginRight: 0 }}>
            <SpotsButton />
          </Box>
          <Box style={{ marginLeft: 0, marginRight: 0 }}>
            <ReportsButton />
          </Box>
          <Box style={{ marginLeft: 0, marginRight: 0 }}>
            <BuddiesButton />
          </Box>
          <Box style={{ marginLeft: 0, marginRight: 0 }}>
            <AddButton handleClick={() => setAddMenuOpen(!addMenuOpen)} />
          </Box>
          <Box style={{ marginLeft: 0, marginRight: 0 }}>
            <ProfileButton />
          </Box>
        </Box> */}
        {/* add menu */}
        <AddMenu menuOpen={addMenuOpen} />
        <ProfileMenu menuOpen={profileMenuOpen} />

        {/* dark background above add menu */}
        {addMenuOpen || profileMenuOpen ? (
          <div onClick={handleClickAway} className={classes.fadedBackground} />
        ) : null}
      </div>
    );
  }
  return null;
});
