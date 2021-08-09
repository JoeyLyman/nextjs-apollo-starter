import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { onError } from "apollo-link-error";
import cookie from "cookie";
import fetch from "isomorphic-unfetch";

import typeDefs from "./typeDefs";

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  const httpLink = new HttpLink({
    uri: process.env.SERVER_URI, // Server URL (must be absolute)
    // credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    //credentials: "include",
    fetchOptions: {
      mode: "cors",
    },
    fetch,
  });

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = getNextCookies(ctx).token;

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        //"Access-Control-Allow-Origin": "http:/localhost:3000", // *
        authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.forEach(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
        )
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  const link = authLink.concat(httpLink, errorLink);

  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link,
    cache: new InMemoryCache().restore(initialState),
    typeDefs,
    connectToDevTools: true,
  });
}

const getNextCookies = (ctx) => {
  const cookieStr =
    ctx && ctx.req ? ctx.req.headers.cookie : window.document.cookie;
  return cookie.parse(cookieStr || "");
};
