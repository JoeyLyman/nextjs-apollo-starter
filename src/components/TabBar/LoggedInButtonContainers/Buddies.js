import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";
// Next
import { useRouter } from "next/router";

import TabBarButton from "../Components/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function BuddiesTabBarButton(props) {
  const {} = props;
  const classes = useStyles();
  const router = useRouter();

  const handleClick = () => {
    router.push("/searchBuddies");
  };

  const selected = router.pathname === "/searchBuddies";

  return (
    <TabBarButton
      icon={<PeopleIcon />}
      text="Buddies"
      handleClick={handleClick}
      selected={selected}
    />
  );
}

export default BuddiesTabBarButton;
