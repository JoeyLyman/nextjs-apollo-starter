// BLOG: https://kentcdodds.com/blog/application-state-management-with-react

import React, { useReducer } from "react";
import deepmerge from "deepmerge";

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

function reducer(state, action) {
  switch (action.type) {
    case "reachedBottom": {
      return deepmerge(
        state,
        { atBottom: true },
        {
          arrayMerge: overwriteMerge,
        }
      );
    }
    case "leftBottom": {
      return deepmerge(
        state,
        { atBottom: false },
        {
          arrayMerge: overwriteMerge,
        }
      );
    }
    case "setState": {
      return action.newState;
    }
  }
}

const ScrollStateContext = React.createContext();
const ScrollDispatchContext = React.createContext();

// ______ Hooks _______
export function useScrollState() {
  const context = React.useContext(ScrollStateContext);
  if (!context) {
    throw new Error(`useScrollState must be used within a ScrollProvider.`);
  }
  return context;
}

export function useScrollDispatch() {
  const context = React.useContext(ScrollDispatchContext);
  if (!context) {
    throw new Error(`useScrollDispatch must be used within a ScrollProvider.`);
  }
  return context;
}

export function ScrollProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    atBottom: false,
  });

  // Need to memoize it, cuz if we dont, say we do value={[state, dispatch]}, then the objects wont technically be the same if the provider re renders,
  //  which will cause children to re render
  const stateValue = React.useMemo(() => state, [state]);
  const dispatchValue = React.useMemo(() => dispatch, [dispatch]);

  return (
    <ScrollStateContext.Provider value={stateValue}>
      <ScrollDispatchContext.Provider value={dispatchValue}>
        {props.children}
      </ScrollDispatchContext.Provider>
    </ScrollStateContext.Provider>
  );
}
