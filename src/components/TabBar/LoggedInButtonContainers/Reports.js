import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import MenuBookIcon from "@material-ui/icons/MenuBook";
// Next
import { useRouter } from "next/router";

import TabBarButton from "../Components/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function ReportsTabBarButton(props) {
  const {} = props;
  const classes = useStyles();
  const router = useRouter();

  const handleClick = () => {
    router.push("/reports");
  };

  const selected = router.pathname === "/reports";

  return (
    <TabBarButton
      icon={<MenuBookIcon />}
      text="Reports"
      handleClick={handleClick}
      selected={selected}
    />
  );
}

export default ReportsTabBarButton;
