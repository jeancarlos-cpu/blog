import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import logo from "../../assets/logo.png";
import { useApolloClient } from "@apollo/react-hooks";

export default ({ isLoggedIn }) => {
  const client = useApolloClient();
  const handleSignOut = () => {
    localStorage.clear();
    client.writeData({ data: { isLoggedIn: false } });
  };

  return (
    <header>
      <Link to="/">
        <img src={logo} alt="aa" />
      </Link>
      <ul>
        <li className="push-left">
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          {isLoggedIn ? (
            <div onClick={handleSignOut}>SIGN OUT</div>
          ) : (
            <Link to="/login">LOGIN</Link>
          )}
        </li>
      </ul>
    </header>
  );
};
