import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
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
    router.push("/login");
  };

  const selected = router.pathname === "/login";

  return (
    <TabBarButton
      icon={<PersonIcon />}
      text="Log in"
      handleClick={handleClick}
      selected={selected}
    />
  );
}

export default LoginTabBarButton;
