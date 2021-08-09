import React from "react";
// Next
import { useRouter } from "next/router";
// HOCS
import { withApollo } from "../data/withApollo";

// Layout
import LoginPageLayout from "../components/Layout/Login";

import LoginFormContainer from "../components/PageSpecific/Login/Container";

// Footer
import Footer from "../components/Footer/Container";
// Tab bar
import TabBar from "../components/TabBar/Containers/LoggedOut";

function Welcome() {
  const router = useRouter();

  return (
    <LoginPageLayout
      centerForm={
        <>
          <p>hello and welcome to this starter pack</p>
          <button onClick={() => router.push("/login")}>log in</button>
        </>
      }
      footer={<Footer />}
      tabBar={<TabBar />}
    />
  );
}

export default withApollo()(Welcome);
