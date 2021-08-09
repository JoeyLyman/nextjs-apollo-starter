import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from "@material-ui/core";
import LoopIcon from "@material-ui/icons/Loop";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginBottom: -10,
  },
  button: {
    textTransform: "Capitalize",
  },
}));

function ResetOrderHeader(props) {
  const { handleResetOrderClick } = props;
  const classes = useStyles();

  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      className={classes.root}
    >
      <Box flexGrow={1}>
        <Typography variant="subtitle2">
          Drag and drop to change order.
        </Typography>
      </Box>

      <Button
        size="small"
        endIcon={<LoopIcon />}
        onClick={handleResetOrderClick}
        className={classes.button}
      >
        Reset Order
      </Button>
    </Box>
  );
}

export default ResetOrderHeader;
