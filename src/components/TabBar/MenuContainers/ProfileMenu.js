import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Slide, Box, Divider } from "@material-ui/core";
// Icons
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PaymentIcon from "@material-ui/icons/Payment";
import CloseIcon from "@material-ui/icons/Close";
// Next Router
import { useRouter } from "next/router";
// Logout
import { logout } from "../../../util/auth/auth";
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

function TabBarProfileMenu(props) {
  const { menuOpen } = props;
  const classes = useStyles();
  const router = useRouter();

  const handleMyProfileClick = () => {
    router.push("/myprofile");
  };

  const handleManageSubscriptionClick = () => {
    console.log(`manage subscription clicked`);
    //router.push("/manageSubscription");
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <Slide direction="up" in={menuOpen} mountOnEnter unmountOnExit>
      <Box display="flex" flexDirection="column" className={classes.menu}>
        <MenuButton
          text="Log Out"
          icon={<CloseIcon />}
          handleClick={handleLogoutClick}
        />
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Divider className={classes.divider} />
        </Box>

        <MenuButton
          text="Manage Subscription"
          icon={<PaymentIcon />}
          handleClick={handleManageSubscriptionClick}
        />
        <Box display="flex" flexDirection="row" justifyContent="center">
          <Divider className={classes.divider} />
        </Box>
        <MenuButton
          text="My Profile"
          icon={<AccountCircleIcon />}
          handleClick={handleMyProfileClick}
        />
      </Box>
    </Slide>
  );
}

export default TabBarProfileMenu;
