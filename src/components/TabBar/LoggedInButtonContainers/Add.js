import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
// Next
import { useRouter } from "next/router";

import TabBarButton from "../Components/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

function AddTabBarButton(props) {
  const { handleClick } = props;
  const classes = useStyles();
  const router = useRouter();

  const selected =
    router.pathname === "/addReport" || router.pathname === "addSpot";

  return (
    <TabBarButton
      icon={<AddIcon />}
      text="Add"
      handleClick={handleClick}
      selected={selected}
    />
  );
}

export default AddTabBarButton;
