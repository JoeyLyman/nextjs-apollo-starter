import React from "react";
// Apollo
import { useQuery } from "@apollo/react-hooks";

// Queries
import GET_ALL_NCO_STATIONS from "../queries/stations/NCOStations/getAllNCOStations";

const AllNCOStationsDataWrapper = (props) => {
  const {} = props;
  // Query Spots
  const {
    loading: loading,
    data: data,
    error: e,
    //refetch: spotsRefetch,
  } = useQuery(GET_ALL_NCO_STATIONS, {
    errorPolicy: "all",
  });

  if (e) {
    console.log(`Error in spots list:`, e);
  }

  const childrenWithData = React.Children.map(props.children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        nCOStationsLoadingFromWrapper: loading,
        nCOStationsDataFromWrapper: data ? data.getAllNCOStations : undefined,
        nCOStationsErrorFromWrapper: e,
      });
    }
    return child;
  });

  return <>{childrenWithData}</>;
};

export default AllNCOStationsDataWrapper;
