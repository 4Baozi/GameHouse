import React from "react";
import { SignUp } from "../components";
import SigninBackground from "../../src/images/loginbackground.gif";
import "./styles/signUpPage.css";

export default function SignUpPage() {
  return (
    <div className="hello">
      <div className="bring-to-top">
      <SignUp />
      </div>
        <img className="full-background" src={SigninBackground}/>
    </div>
  );
}
