import React from "react";
import "./header.styles.scss";
import logo from '../../assets/logo.png'


export default () => {
  return (
    <header>
          <img src={logo} alt="aa" />
      <ul>
        <li className="push-left">ABOUT</li>
        <li>LOGIN</li>
      </ul>
    </header>
  );
};
