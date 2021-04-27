import React from "react";
import { SignIn } from "../components";
import SigninBackground from "../../src/images/signin-background.gif";
import  "./styles/signUpPage.css";

export default function SignInPage(props) {
  return (
    <div>
          <img className="full-background" src={SigninBackground}/>

      <SignIn />
    </div>
  );
}
