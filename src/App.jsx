import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/home-page/home-page.component";
import LoginPage from "./pages/login-page/login-page.component";
import ProfilePage from "./pages/profile-page/profile-page.component";
import Header from "./components/header/header.component";

const IS_USER_LOGGED_IN = gql`
  query isLoggedIn {
    isLoggedIn @client
  }
`;

export default () => {
  const { data } = useQuery(IS_USER_LOGGED_IN);
  const { isLoggedIn } = data;
  return (
    <BrowserRouter>
      <Header isLoggedIn={isLoggedIn}/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/profile/:userId" component={ProfilePage} />

        <Route
          path="/login"
          render={() =>
            isLoggedIn ? (
              <Redirect to="/" />
            ) : (
              <LoginPage />
            )
          }
        />
      </Switch>
    </BrowserRouter>
  );
};
