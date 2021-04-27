import React, { useState } from "react";
import "./styles/signup.css";
import firebase from "../../config/firebase-config";
import { socialMediaAuth } from "../../service/auth";
import { googleProvider } from "../../config/authentication-methods";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { FcGoogle } from "react-icons/fc";
import { BiShow, BiHide } from "react-icons/bi";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // for firebase
  const [passwordShown, setPasswordShown] = useState(false);
  const [errorActive, setErrorActive] = useState(false);

  const handleOnClick = async (provider) => {
    try {
      const response = await socialMediaAuth(provider);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => console.log(response.user))
      .catch((error) => setError(error.message));
  };

  const handlePasswordToggle = () => {
    setPasswordShown(!passwordShown);
  };

  const isValid = email !== "" && username !== "" && password !== "";

  return (
    <div className="sign-up-container">
      <h3 className="title">Sign Up</h3>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input"
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          placeholder="Email address"
          onChange={({ target }) => setEmail(target.value)}
        />
        <label className="form__label" htmlFor="username">
          Username
        </label>
        <input
          className="form__input"
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          placeholder="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <label className="form__label" htmlFor="password">
          Password
        </label>
        <div className="form__password">
          <input
            className="form__input"
            type={passwordShown ? "text" : "password"}
            name="password"
            id="password"
            autoComplete="off"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <div
            className="password-icon"
            tooltip={passwordShown ? "Hide password" : "Show password"}
            onClick={handlePasswordToggle}
          >
            {passwordShown ? <BiHide /> : <BiShow />}
          </div>
        </div>
        <button className="form__btn reg" type="submit" disabled={!isValid}>
          Sign Up
        </button>
        <button
          className="form__btn auth"
          onClick={() => handleOnClick(googleProvider)}
        >
          <FcGoogle className="form__icon" /> Sign up with Google
        </button>
        <div
          className={`form__error ${errorActive ? "form__error--active" : ""}`}
        >
          {error}
        </div>
      </form>
      <div className="form__redirect">
        Already have an account?{" "}
        <NavLink className="form__link" exact to={ROUTES.SIGN_IN}>
          Sign in
        </NavLink>
      </div>
    </div>
  );
}
