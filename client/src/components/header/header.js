import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'
import Logo from '../../images/gamehouse_logo.svg'
import './styles/header.css'
import './styles/hamburger.css'
export default function Header() {
    const [openToggle, setOpenToggle] = useState(false)

    return (
        <nav className='navbar'>
            <div className='navbar-top'>
                <NavLink className="navbar-logo-item" exact to={ROUTES.HOME}>
                    <img className='navbar-logo' src={Logo} alt='Gamehouse' />
                </NavLink>
                <div className={`navbar-hamburger-icon ${openToggle ? '' : 'open'}`}
                    onClick={() => setOpenToggle(!openToggle)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <ul
                className={`navbar-nav ${openToggle ? '' : 'open-toggle'}`}
            >

                <li className="navbar-item navbar-btn-item">
                    <NavLink className="navbar-btn-link" exact to={ROUTES.SIGN_UP}>
                        <button className="navbar-button">
                            Sign up
                         </button>
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="navbar-link" exact to={ROUTES.ABOUT}>
                        About
                     </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="navbar-link" exact to={ROUTES.BROWSE} >
                        Gallery
                     </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink className="navbar-link" exact to={ROUTES.CONTACT} >
                        Contact
                     </NavLink>
                </li>
            </ul>
        </nav >
    )
}
