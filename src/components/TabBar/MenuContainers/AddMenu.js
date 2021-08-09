import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slide, Box, Divider } from "@material-ui/core";
// Icons
import ImportContactsIcon from "@material-ui/icons/ImportContacts";
import AddLocationIcon from "@material-ui/icons/AddLocation";
// Next Router
import { useRouter } from "next/router";

// Display
import { TAB_BAR_HEIGHT } from "../../../display/constants";
// Menu Bar Button
import MenuButton from "../Components/MenuButton";

const useStyles = makeStyles((theme) => ({
  root: {},
  menu: {
    position: "absolute",
    bottom: TAB_BAR_HEIGHT,
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    zIndex: -100,
    //border: "1px solid white",
    boxShadow: `0px 0px 3px 2px ${theme.palette.primary.dark}`,
    paddingBottom: 6,
  },
  divider: {
    width: "90%",
  },
}));

function TabBarAddMenu(props) {
  const { menuOpen } = props;
  const classes = useStyles();
  const router = useRouter();
  const handleAddReportClick = () => {
    console.log(`add report button clicked`);
    router.push("/addReport");
  };

  const handleAddSpotClick = () => {
    console.log(`add spot button clicked`);
    router.push("/addSpot");
  };

  return (
    <Slide direction="up" in={menuOpen} mountOnEnter unmountOnExit>
      <Box display="flex" flexDirection="column" className={classes.menu}>
        <MenuButton
          text="Add Report"
          icon={<ImportContactsIcon />}
          handleClick={handleAddReportClick}
        />
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Divider className={classes.divider} />
        </Box>
        <MenuButton
          text="Add Spot"
          icon={<AddLocationIcon />}
          handleClick={handleAddSpotClick}
        />
      </Box>
    </Slide>
  );
}

export default TabBarAddMenu;
