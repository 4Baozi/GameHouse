import React from "react";
import { SignUp } from "../components";
import { render } from "@react-three/fiber";
import SigninBackground from "../../src/images/signin-background.gif";
import "../../src/app.css";

export default function SignUpPage() {
  return (
    <div>
      <img className="full-background" src={SigninBackground}/>
      {/* <SignUp /> */}
    </div>
  );
}
