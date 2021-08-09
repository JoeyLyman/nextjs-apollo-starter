import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  icon: {
    height: 24,
    width: 24,
  },
  iconSelected: {
    height: 24,
    width: 24,
    color: theme.palette.secondary.light,
  },
  text: {
    fontSize: 12,
    color: theme.palette.primary.contrastTextLight,
    textTransform: "Capitalize",
  },
}));

function TabBarButton(props) {
  const { icon, text, selected, handleClick } = props;
  const classes = useStyles();

  return (
    <Button onClick={handleClick}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <div className={selected ? classes.iconSelected : classes.icon}>
          {icon}
        </div>
        <Typography variant="subtitle2" className={classes.text}>
          {text}
        </Typography>
      </Box>
    </Button>
  );
}

export default TabBarButton;
