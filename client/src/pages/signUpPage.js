import React from "react";
import { SignUp } from "../components";
import SigninBackground from "../../src/images/signin-background.gif";
import "./styles/signUpPage.css";

export default function SignUpPage() {
  return (
    <div className="hello">
      <img className="full-background" src={SigninBackground}/>
      <SignUp />
    </div>
  );
}
