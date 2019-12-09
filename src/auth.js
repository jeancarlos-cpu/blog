// import React from "react";
import decode from "jwt-decode";
// import { useApolloClient } from "@apollo/react-hooks";
export default function IsTokenExpired() {
  //   const client = useApolloClient();
  const token = localStorage.getItem("token");
  try {
    const decoded = decode(token);
    if (decoded.exp > Date.now() / 1000) {
      return token;
    } else {
      localStorage.clear();
      return null;
    }
  } catch (e) {
    localStorage.clear();
    return null;
  }
}
