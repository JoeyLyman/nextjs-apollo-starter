import React from "react";
// HOCs
import { withApollo } from "../data/withApollo";
import { logout, withAuth } from "../util/auth/auth";

function Home(props) {
  const handleClick = () => {
    logout();
  };

  return (
    <div>
      <h1>you are logged in!</h1>
      <button onClick={handleClick}>log out</button>
    </div>
  );
}

export default withApollo({ ssr: false })(withAuth(Home));
