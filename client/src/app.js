import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import {
  PostsListPage,
  HomePage,
  PostFormPage,
  ShowPostPage,
  AboutUsPage,
  SignInPage,
  SignUpPage,
  ContactPage
} from "./pages";
import { Header } from "./components";
import * as ROUTES from "./constants/routes";
import "./app.css";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="container-fluid text-center">
        <div className="row justify-content-center">
          <Switch>
            <Route path={ROUTES.POSTS_FORM} component={PostFormPage} />
            <Route path={ROUTES.POST_ID} component={ShowPostPage} />
            <Route path={ROUTES.ABOUT} component={AboutUsPage} />
            <Route path={ROUTES.SIGN_IN} component={SignInPage} />
            <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
            <Route path={ROUTES.CONTACT} component={ContactPage} />
            <Route path={ROUTES.HOME} component={PostsListPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}