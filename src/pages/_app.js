import React from "react";

// Next
import App from "next/app";
import Head from "next/head";
// Material UI
import CssBaseline from "@material-ui/core/CssBaseline";
import "../../blank.css"; // reason? i forget, helps something get loaded?

// Library Contexts
import { ThemeProvider } from "@material-ui/core/styles";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns"; // Used for MuiPickers

// Custom Contexts
import { ScrollProvider } from "../context/layout/scrollContext.js";
import { LayoutProvider } from "../context/layout/layoutContext";

// Loading Spinner on page transitions
import LoadingSpinnerOnPageTransitions from "../components/Loading/SpinnerOnPageTransition";

// Theme
import theme from "../components/theme";
class MyApp extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        {/* <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div,
          div#__next > div > div {
          }
        `}</style> */}
        <style global jsx>
          {`
            html,
            body {
              overscroll-behavior-x: none;
            }
          `}
        </style>
        <Head>
          <title>nextjs-apollo-starter</title>
          <meta
            name="viewport"
            content="initial-scale=1, width=device-width, minimum-scale=1, maximum-scale=1"
          />
          {/* minimum-scale=1,  */}
        </Head>
        <LoadingSpinnerOnPageTransitions />

        <ScrollProvider>
          <ThemeProvider theme={theme}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <LayoutProvider
              // yes in use by PrimaryLayout component
              >
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {/* also used to pass in ee={ee} to Component */}
                <Component {...pageProps} />
              </LayoutProvider>
            </MuiPickersUtilsProvider>
          </ThemeProvider>
        </ScrollProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;

// custom layouts for routes: https://spectrum.chat/next-js/general/is-there-a-way-to-persist-a-layout-for-a-given-set-of-routes~af6ca794-5420-4780-abd8-96f085a19e09
// https://nextjs.org/docs/#custom-%3Capp%3E
// https://nextjs.org/docs/#custom-%3Cdocument%3E
// _app wrapping functional component: https://spectrum.chat/next-js/general/is-there-an-example-of-app-js-as-a-functional-component~bfc80353-edf0-4850-9442-5d6c2b030209?m=MTU0NzU1MDA0NDUwNQ==
