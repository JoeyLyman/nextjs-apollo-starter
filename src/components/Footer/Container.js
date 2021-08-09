import React, { memo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";
// display hooks
import useWindowSize from "../../display/useWindowSize";
import { MOBILE_SCREEN_MAX_WIDTH } from "../../display/constants";

import LinkButton from "./LinkButton";

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    padding: theme.spacing(2),
    boxShadow: `0px 0px 5px 3px ${theme.palette.primary.main}`,
  },
  rootTransparent: {
    padding: theme.spacing(2),
  },
  separatorDot: {
    color: theme.palette.primary.contrastTextLight,
    marginLeft: 12, //theme.spacing(1),
    marginRight: 12, //theme.spacing(1),
  },
  lightText: {
    color: theme.palette.primary.contrastTextLight,
  },
}));

function Footer(props) {
  const { transparent = true } = props;
  const classes = useStyles();
  const windowSize = useWindowSize();

  // smaller font, stacked
  if (windowSize.width < MOBILE_SCREEN_MAX_WIDTH) {
    return (
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        className={transparent ? classes.rootTransparent : classes.root}
        style={{ padding: 8 }}
      >
        <Box display="flex" flexDirection="row" alignItems="center">
          <LinkButton text="Terms" url={"/terms"} />
          <Typography variant="subtitle1" className={classes.separatorDot}>
            •
          </Typography>
          <LinkButton text="Privacy" url={"/terms/privacy"} />
          <Typography variant="subtitle1" className={classes.separatorDot}>
            •
          </Typography>
          <LinkButton text="Payments" url={"/terms/payments"} />
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          className={classes.lightText}
          style={{ marginTop: 4, marginBottom: 4 }}
        >
          <LinkButton
            text="© 2021, Yewtide, LLC."
            url={"/terms/copyright"}
            small={true}
          />
        </Box>
      </Box>
    );
  }

  // larger font, one row
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      className={transparent ? classes.rootTransparent : classes.root}
      style={{ marginLeft: 8 }}
    >
      <LinkButton text="© 2021, Yewtide, LLC." url={"/terms/copyright"} />
      <Typography variant="subtitle1" className={classes.separatorDot}>
        •
      </Typography>
      <LinkButton text="Terms" url={"/terms"} />
      <Typography variant="subtitle1" className={classes.separatorDot}>
        •
      </Typography>
      <LinkButton text="Privacy" url={"/terms/privacy"} />
      <Typography variant="subtitle1" className={classes.separatorDot}>
        •
      </Typography>
      <LinkButton text="Payments" url={"/terms/payments"} />
    </Box>
  );
}

export default memo(Footer);
