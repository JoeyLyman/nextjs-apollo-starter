import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
// Next
import { useRouter } from "next/router";

import TabBarButton from "../Components/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function LoginTabBarButton(props) {
  const {} = props;
  const classes = useStyles();
  const router = useRouter();

  const handleClick = () => {
    router.push("/welcome");
  };

  const selected = router.pathname === "/welcome";

  return (
    <TabBarButton
      icon={<HomeIcon />}
      text="Home"
      handleClick={handleClick}
      selected={selected}
    />
  );
}

export default LoginTabBarButton;
