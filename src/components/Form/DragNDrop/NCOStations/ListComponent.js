import React from "react";
// MUI
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Box, Typography } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// Util
import { convertDistance } from "geolib";

// Display Data
import { getDirectionDeg } from "../../../../display/data/location";
// Components
import FindOnMapButton from "../../../Buttons/FindOnMap";
// Context
import {
  useSelectionsState,
  useSelectionsDispatch,
  SELECTION_TYPES,
} from "../../../../context/selections/context";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    border: "1px solid transparent",
  },
  rootHovered: {
    width: "100%",
    border: `1px solid ${theme.palette.secondary.light}`,
  },
  rootIsDragging: {
    width: "100%",
    boxShadow: `0 0 2px 2px ${theme.palette.secondary.light}`,
  },
  box: {
    margin: 5,
  },
  separatorDot: {
    color: "grey", //theme.palette.primary.contrastTextLight,
    //fontWeight: "lighter",
    marginLeft: 8,
    marginRight: 8,
  },
  stationStation: {
    fontWeight: "lighter",
    marginLeft: 4,
    color: theme.palette.primary.contrastTextLight,
    float: "left",
  },
  stationName: {
    marginLeft: 8,
    marginRight: 4,
    color: theme.palette.primary.contrastText,
    float: "left",
    textTransform: "Capitalize",
  },

  distanceAway: {
    marginLeft: 4,
    color: theme.palette.primary.contrastText,
    float: "left",
  },
  distanceAwayUnits: {
    marginLeft: theme.spacing(0.5),
    color: theme.palette.primary.contrastTextLight,
    float: "left",
  },
  directionArrow: {
    float: "left",
    height: 22,
    marginLeft: theme.spacing(1),
  },
  findOnMapButton: {},
}));

const ContextWrapper = (props) => {
  // This is for current NCOStation selection
  const selectionsState = useSelectionsState();
  const selectionsDispatch = useSelectionsDispatch();

  const { currentlyHovered } = selectionsState;

  const isHovered =
    currentlyHovered.type === SELECTION_TYPES.NCO_STATION &&
    currentlyHovered.value._id === props.nCOStation.nCOStation._id; // if current station in props is equal to station in context

  return (
    <DNDListItem
      {...props}
      isHovered={isHovered}
      selectionsDispatchCtx={selectionsDispatch}
    />
  );
};

export default ContextWrapper;

function DNDListItem(props) {
  const {
    spotCoordinates,
    nCOStation,
    isDragging,
    isHovered,
    selectionsDispatchCtx,
  } = props;
  const classes = useStyles();
  // const [
  //   nCOStationsSelection,
  //   setNCOStationsSelection,

  const stationCoordinates = nCOStation.nCOStation.loc.coordinates;
  const distanceAwayUnits = "mi";

  // const distanceAway = getDistance(
  //   Math.round(spotCoordinates[0] * 100) / 100,
  //   Math.round(spotCoordinates[1] * 100) / 100,
  //   station.loc.coordinates[0],
  //   station.loc.coordinates[1],
  //   distanceAwayUnits
  // );

  // const directionCompassToStation = getDirectionComp(
  //   spotCoordinates[0],
  //   spotCoordinates[1],
  //   stationCoordinates[0],
  //   stationCoordinates[1]
  // );

  const directionDegToStation = getDirectionDeg(
    spotCoordinates[0],
    spotCoordinates[1],
    stationCoordinates[0],
    stationCoordinates[1]
  );

  return (
    <Paper
      className={
        isDragging
          ? classes.rootIsDragging
          : isHovered
          ? classes.rootHovered
          : classes.root
      }
    >
      <div
        onMouseEnter={() =>
          selectionsDispatchCtx({
            type: "updateHovered",
            hoveredUpdates: {
              type: SELECTION_TYPES.NCO_STATION,
              value: nCOStation.nCOStation,
            },
          })
        }
        onMouseLeave={() =>
          selectionsDispatchCtx({
            type: "updateHovered",
            hoveredUpdates: { type: null, value: null },
          })
        }
      >
        <Box
          // classes.dataBox
          display="flex"
          flexDirection="row"
          className={classes.box}
        >
          <Box
            display="flex"
            alignItems="center"
            flexDirection="row"
            flexGrow={1}
            justifyContent="start"
          >
            <Typography variant="subtitle2" className={classes.stationStation}>
              Station:
            </Typography>

            <Typography variant="subtitle2" className={classes.stationName}>
              {nCOStation.nCOStation.name.toLowerCase()}
            </Typography>
            <Typography variant="subtitle2" className={classes.separatorDot}>
              •
            </Typography>
            <Typography variant="subtitle2" className={classes.distanceAway}>
              {Math.round(
                convertDistance(nCOStation.distanceAway, distanceAwayUnits) * 10
              ) / 10}
            </Typography>
            <Typography
              variant="subtitle2"
              className={classes.distanceAwayUnits}
            >
              {distanceAwayUnits}
            </Typography>
            {/* direct arrow */}
            <ArrowRightAltIcon
              className={classes.directionArrow}
              style={{
                color: "white",
                transform: `translate(-10%, 0%) rotate(${
                  directionDegToStation - 90
                }deg) `,
              }}
            />
          </Box>
          <Box style={{ float: "left", marginRight: 4 }}>
            <FindOnMapButton
              long={stationCoordinates[0]}
              lat={stationCoordinates[1]}
              size={"small"}
              className={classes.findOnMapButton}
              color="primary"
            />
          </Box>
        </Box>
      </div>
    </Paper>
  );
}
