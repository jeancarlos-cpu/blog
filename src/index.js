import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import ApolloClient, { InMemoryCache } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { typeDefs, resolvers } from "./resolvers";
import "./index.scss";

const cache = new InMemoryCache();

const client = new ApolloClient({
  // uri: "https://protected-forest-05457.herokuapp.com/",
  uri: 'http://192.168.0.15:4000',
  cache,
  headers: { authorization: `${localStorage.getItem("token")}` },
  typeDefs,
  resolvers
});

client.writeData({ data: { isLoggedIn: !!localStorage.getItem("token") } });

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
