import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import RoomIcon from "@material-ui/icons/Room";
// Next
import { useRouter } from "next/router";

import TabBarButton from "../Components/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function SpotsTabBarButton(props) {
  const {} = props;
  const classes = useStyles();
  const router = useRouter();

  const handleClick = () => {
    router.push("/spots");
  };

  const selected = router.pathname === "/" || router.pathname === "/spots";

  return (
    <TabBarButton
      icon={<RoomIcon />}
      text="Spots"
      handleClick={handleClick}
      selected={selected}
    />
  );
}

export default SpotsTabBarButton;
