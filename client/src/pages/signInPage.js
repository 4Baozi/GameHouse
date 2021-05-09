import React from "react";
import { SignIn } from "../components";
import SigninBackground from "../../src/images/signin-background.gif";
import  "./styles/signUpPage.css";

export default function SignInPage(props) {
  return (
    <div>
      <div className="bring-to-top">
        <SignIn />
      </div>
          <img className="full-background-2" src={SigninBackground}/>
    </div>
  );
}
