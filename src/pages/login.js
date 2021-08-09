import React from "react";

// HOCS
import { withApollo } from "../data/withApollo";

// Layout
import LoginPageLayout from "../components/Layout/Login";

import LoginFormContainer from "../components/PageSpecific/Login/Container";

// Footer
import Footer from "../components/Footer/Container";
// Tab bar
import TabBar from "../components/TabBar/Containers/LoggedOut";

function Login() {
  return (
    <LoginPageLayout
      centerForm={<LoginFormContainer />}
      footer={<Footer />}
      tabBar={<TabBar />}
    />
  );
}

export default withApollo()(Login);
