import React, { useState } from "react";
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import "./login-page.styles.scss";

export default () => {
  const [status, setStatus] = useState(true);
  const toogleStatus = () => setStatus(!status);
  return (
    <div className="login-page">
      {status ? (
        <SignIn toogleStatus={toogleStatus} />
      ) : (
        <SignUp toogleStatus={toogleStatus} />
      )}
    </div>
  );
};
