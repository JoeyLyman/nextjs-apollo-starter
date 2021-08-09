import React from "react";
// Apollo
import { useQuery } from "@apollo/react-hooks";

// Queries
import GET_ALL_NW3_STATIONS from "../queries/stations/NW3Stations/getAllNW3Stations";

const AllNW3StationsDataWrapper = (props) => {
  const {} = props;
  // Query Spots
  const {
    loading: loading,
    data: data,
    error: e,
    //refetch: spotsRefetch,
  } = useQuery(GET_ALL_NW3_STATIONS, {
    errorPolicy: "all",
  });

  if (e) {
    console.log(`Error in spots list:`, e);
  }

  const childrenWithData = React.Children.map(props.children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        nW3StationsLoadingFromWrapper: loading,
        nW3StationsDataFromWrapper: data ? data.getAllNW3Stations : undefined,
        nW3StationsErrorFromWrapper: e,
      });
    }
    return child;
  });

  return <>{childrenWithData}</>;
};

export default AllNW3StationsDataWrapper;
