// BLOG: https://kentcdodds.com/blog/application-state-management-with-react

import React, { useReducer } from "react";
import deepmerge from "deepmerge";

const overwriteMerge = (destinationArray, sourceArray, options) => sourceArray;

function reducer(state, action) {
  switch (action.type) {
    case "toggleShowLeft": {
      return deepmerge(
        state,
        { showLeft: !state.showLeft },
        {
          arrayMerge: overwriteMerge,
        }
      );
    }
    case "toggleShowRight": {
      return deepmerge(
        state,
        { showRight: !state.showRight },
        {
          arrayMerge: overwriteMerge,
        }
      );
    }
    case "toggleShowSecondaryBar": {
      return deepmerge(
        state,
        { showSecondaryBar: !state.showSecondaryBar },
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

const LayoutStateContext = React.createContext();
const LayoutDispatchContext = React.createContext();

// ______ Hooks _______
export function useLayoutState() {
  const context = React.useContext(LayoutStateContext);
  if (!context) {
    throw new Error(`useLayoutState must be used within a LayoutProvider.`);
  }
  return context;
}

export function useLayoutDispatch() {
  const context = React.useContext(LayoutDispatchContext);
  if (!context) {
    throw new Error(`useLayoutDispatch must be used within a LayoutProvider.`);
  }
  return context;
}

export function LayoutProvider(props) {
  const [state, dispatch] = useReducer(reducer, {
    showLeft: true,
    showRight: true,
    showSecondaryBar: false,
  });

  // Need to memoize it, cuz if we dont, say we do value={[state, dispatch]}, then the objects wont technically be the same if the provider re renders,
  //  which will cause children to re render
  const stateValue = React.useMemo(() => state, [state]);
  const dispatchValue = React.useMemo(() => dispatch, [dispatch]);

  return (
    <LayoutStateContext.Provider value={stateValue}>
      <LayoutDispatchContext.Provider value={dispatchValue}>
        {props.children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

// OLD
// const LayoutContext = React.createContext();

// function useLayout() {
//   const context = React.useContext(LayoutContext);
//   if (!context) {
//     throw new Error(`useUser must be used within a UserProvider`);
//   }
//   return context;
// }

// function LayoutProvider(props) {
//   // const { layout: layoutProp } = props; // this is provided from withAuth HOC
//   const [layout, setLayout] = React.useState({
//     showLeft: true,
//     showRight: true,
//   });

//   const value = React.useMemo(() => [layout, setLayout], [layout]);
//   return <LayoutContext.Provider value={value} {...props} />;
// }

// export { LayoutProvider, useLayout };
