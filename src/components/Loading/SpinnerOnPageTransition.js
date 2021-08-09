//import React, { useState, useEffect } from "react";

import LoadingSpinner from "./Spinner";
import useRouterLoading from "./useRouterLoading";

function SpinnerOnPageTransition(props) {
  const {} = props;
  const loading = useRouterLoading();

  if (loading) {
    return <LoadingSpinner />;
  } else {
    return null;
  }
}

export default SpinnerOnPageTransition;
