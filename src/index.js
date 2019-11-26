import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import './index.css'

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
      <App />
  </ApolloProvider>,
  document.getElementById("root")
);
