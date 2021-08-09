import React from "react";
import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";

import { withApollo } from "../../data/withApollo";
// import { withAuthSync } from "../util/auth/auth";

// Components
import PrimaryLayout from "../../components/Layout/Primary";
import ResetPasswordForm from "../../components/Pages/ResetPassword/Container";
import Footer from "../../components/Footer/Container";

const useStyles = makeStyles((theme) => ({
  logoBox: {
    position: "fixed",
    top: 12,
    left: 12, //190,
    cursor: "pointer",
  },
}));

function ResetPasswordPage(props) {
  const classes = useStyles();
  const router = useRouter();
  const { urlToken } = props;

  //const urlToken = router.query.urlToken; // alternative way to get url token, but still need get init props

  return (
    <div>
      <PrimaryLayout
        isSecondaryBar={false}
        header={null}
        left={<ResetPasswordForm urlToken={urlToken} />}
        right={null}
        footer={<Footer />}
      />
    </div>
  );
}

ResetPasswordPage.getInitialProps = async function (context) {
  const { urlToken } = context.query;
  return { urlToken };
};

export default withApollo({ ssr: false })(ResetPasswordPage);
