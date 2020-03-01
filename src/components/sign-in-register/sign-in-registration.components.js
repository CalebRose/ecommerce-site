import React from "react";

import "./sign-in-registration.styles.scss";
import SignIn from "./sign-in/sign-in.components";
import SignUp from "./registration/sign-up.component";

const SignInPage = () => {
  return (
    <div className="sign-in-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInPage;
