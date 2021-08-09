import React, { memo } from "react";
// MUI
import { makeStyles } from "@material-ui/core/styles";
import { Box, List, ListItem } from "@material-ui/core";
// Util
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
// const { DragDropContext, Draggable, Droppable } = window ? window.ReactBeautifulDnd : null;
// const ReactDOM = window.ReactDOM;

import ResetOrderHeader from "../ResetOrderHeader";
import ListComponent from "./ListComponent";

const useStyles = makeStyles((theme) => ({
  root: {},
  list: {
    //padding: 0,
  },
  listItem: {
    //padding: theme.spacing(1),
  },
}));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function NCOStationsPriorityDND(props) {
  const {
    spotCoordinates,
    setFormState,
    nCOStations,
    nCOStationsOrderState,
  } = props;
  const classes = useStyles();

  const handeOnDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      nCOStationsOrderState ? nCOStationsOrderState : nCOStations,
      result.source.index,
      result.destination.index
    );

    setFormState("nCOStations", items);
  };

  // Because state starts at [] when stations are loading, then if state has been set, that is the order
  const nCOStationsOrder = !nCOStationsOrderState
    ? nCOStations
    : nCOStationsOrderState;

  return (
    <DragDropContext onDragEnd={handeOnDragEnd}>
      <Box display="flex" flexDirection="column" className={classes.root}>
        <ResetOrderHeader
          handleResetOrderClick={() => setFormState("nCOStations", nCOStations)}
        />
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div>
              <div
                ref={provided.innerRef}
                //style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                <List className={classes.list}>
                  {nCOStationsOrder.map((nCOStation, index) => (
                    <Draggable
                      key={nCOStation.nCOStation._id}
                      draggableId={nCOStation.nCOStation._id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          //style={getItemStyle(
                          //  provided.draggableProps.style,
                          //  snapshot.isDragging
                          //)}
                        >
                          {/* <p>{nCOStation.nCOStation._id}</p> */}
                          <ListItem
                            key={nCOStation.nCOStation._id}
                            className={classes.listItem}
                          >
                            <ListComponent
                              spotCoordinates={spotCoordinates}
                              nCOStation={nCOStation}
                              isDragging={snapshot.isDragging}
                            />
                          </ListItem>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </List>
              </div>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Box>
    </DragDropContext>
  );
}

export default memo(NCOStationsPriorityDND);
