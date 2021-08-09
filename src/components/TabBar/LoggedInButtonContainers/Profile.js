import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// Next
import { useRouter } from "next/router";

import TabBarButton from "../Components/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function MyProfileTabBarButton(props) {
  const { handleClick } = props;
  const classes = useStyles();
  const router = useRouter();

  const selected = router.pathname === "/myprofile";

  return (
    <TabBarButton
      icon={<AccountCircleIcon />}
      text="Profile"
      handleClick={handleClick}
      selected={selected}
    />
  );
}

export default MyProfileTabBarButton;
