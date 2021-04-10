import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import Logo from '../../images/gamehouse_logo.svg'
export default function Header() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark shadow mb-3">
            <Link className="navbar-brand" to="/"><img src={Logo} /></Link>

{/*             
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" exact to={ROUTES.POSTS_FORM}>
                        Create a Micro Post
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to={ROUTES.ABOUT}>
                        About Us
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to={ROUTES.SIGN_IN}>
                        Sign In
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to={ROUTES.SIGN_UP}>
                        Sign Up
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" exact to={ROUTES.ROOM}>
                        Room
                    </NavLink>
                </li>
            </ul>
*/}
        </nav>
    )
}
