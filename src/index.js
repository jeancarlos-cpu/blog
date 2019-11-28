import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import ApolloClient, { InMemoryCache, gql } from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import "./index.scss";

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://192.168.0.15:4000/",
  cache,
  headers: {authorization:`${localStorage.getItem('token')}`}
});

client.writeData({ data: { isLoggedIn: !!localStorage.getItem("token") } });

ReactDOM.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>,
  document.getElementById("root")
);
