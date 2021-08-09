import { useEffect } from "react";
import Router from "next/router";
import nextCookie from "next-cookies";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
// Data
// import gql from "graphql-tag";
// import { useQuery } from "@apollo/react-hooks";
// Context providers
// import { UserProvider } from "../../context/userContext";

export const login = (token) => {
  //Cookies.set("token", token, { sameSite: "none", secure: true }); //, { expires: 1000 });
  Cookies.set("token", token); // {domain: "yt.client.localhost:3000",}
  Router.push({ pathname: "/" });
};

export function logout(client) {
  Cookies.remove("token");
  if (client) {
    client.clearStore();
  }
  // to support logging out from all windows
  window.localStorage.setItem("logout", Date.now());
  Router.push("/login");
}

function isTokenExpired(token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    console.log(`token is expired`);
    return true;
  } else {
    return false;
  }
}

// TODO: if not logged in, do we push to login? or change header / show different data; need these 2 options; maybe context handles the diff data, and certain pages like spots push to login (the pages not accessible unless logged in), and make the pushing a boolean that we can pass in per page
function getAuthTokenFromContext(ctx) {
  const { token } = nextCookie(ctx);
  // Check if token is expired: // TODO: see if this function works, see if expiration on token is same as my calculation of expiration
  if (token) {
    if (isTokenExpired(token)) {
      console.log(`removing expired token...`);
      Cookies.remove("token");
      return null;
    } else {
      return token;
    }
  } else {
    return null;
  }
}

export const withAuth = (WrappedComponent, redirect) => {
  const Wrapper = (props) => {
    const { token } = props;

    // Sync Logout of all tabs on device
    const syncLogout = (event) => {
      if (event.key === "logout") {
        console.log("logged out from storage!");
        //props.apolloClient.clearStore();
        Router.push("/login");
      }
    };

    useEffect(() => {
      window.addEventListener("storage", syncLogout);

      return () => {
        window.removeEventListener("storage", syncLogout);
        //window.localStorage.removeItem("logout");
      };
    }, []);

    const decodedToken = props.token ? jwtDecode(props.token) : null;

    // return (
    //   <UserProvider user={user}>
    //     <WrappedComponent {...props} />
    //   </UserProvider>
    // );

    return (
      <WrappedComponent {...props} token={token} decodedToken={decodedToken} />
    );
  };

  Wrapper.getInitialProps = async (ctx) => {
    const token = getAuthTokenFromContext(ctx);

    const componentProps =
      WrappedComponent.getInitialProps &&
      (await WrappedComponent.getInitialProps(ctx));

    // Redirect to login page if no auth token, and page requires it
    //if (!token && redirect) {
    if (!token) {
      if (typeof window === "undefined") {
        ctx.res.writeHead(302, { Location: "/login" });
        ctx.res.end();
      } else {
        logout(); // logout(componentProps.apolloClient);
      }
    }

    return { ...componentProps, token };
  };

  return Wrapper;
};

// console.log(`componentProps:`, componentProps);
// if (componentProps) {
//   return {
//     token,
//     billy: "BOB",
//     apolloClient: componentProps.apolloClient ? "one" : "two"
//   };
// }

// should i get user profile here?
// const res = await ctx.apolloClient.query({
//   query: gql`
//     query getMyProfile {
//       getMyProfile {
//         code
//         success
//         message
//         user {
//           _id
//           username
//           email {
//             address
//             confirmed
//           }
//           profilePicture {
//             url
//             publicID
//           }
//         }
//       }
//     }
//   `,
// });

// console.log(`get my profile res:`, res);
// const user = res.data.getMyProfile.user;

//console.log(`user:`, user);

// const componentProps = WrappedComponent.getInitialProps
//   ? await WrappedComponent.getInitialProps(ctx)
//   : null;
