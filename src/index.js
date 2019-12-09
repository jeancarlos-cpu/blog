import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { typeDefs, resolvers } from "./graphql/resolvers";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache,
  typeDefs,
  resolvers,
  request: operation => {
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  },
  onError: ({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message, locations, path }) => {
        if (message === "jwt expired") {
          localStorage.clear();
          cache.writeData({
            data: { isLoggedIn: false }
          });
        }
      });
    }
  }
});

client.writeData({
  data: { isLoggedIn: !!localStorage.getItem("token") }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.register();
