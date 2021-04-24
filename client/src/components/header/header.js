import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Logo from '../../images/gamehouse_logo.svg';
import './styles/header.css';
import { Squash as Hamburger } from 'hamburger-react';
export default function Header() {
    const [openToggle, setOpenToggle] = useState(true);

    return (
        <nav className='navbar'>
            <div className='navbar__top'>
                <NavLink className='navbar__logo__link' exact to={ROUTES.HOME}>
                    <img className='navbar__logo' src={Logo} alt='Gamehouse' />
                </NavLink>
                <div className='navbar__hamburger-icon'>
                    <Hamburger toggled={openToggle} toggle={setOpenToggle} />
                </div>
            </div>
            <ul className={`navbar__nav ${!openToggle ? '' : 'open-toggle'}`}>
                <li className='navbar__nav__item navbar__nav__btn'>
                    <NavLink
                        className='navbar-btn-link'
                        exact
                        to={ROUTES.SIGN_UP}
                    >
                        <button className='navbar__button'>Sign up</button>
                    </NavLink>
                </li>
                <li className='navbar__nav__item'>
                    <NavLink
                        className='navbar__nav__link'
                        exact
                        to={ROUTES.ABOUT}
                    >
                        About
                    </NavLink>
                </li>
                <li className='navbar__nav__item'>
                    <NavLink
                        className='navbar__nav__link'
                        exact
                        to={ROUTES.BROWSE}
                    >
                        Gallery
                    </NavLink>
                </li>
                <li className='navbar__nav__item'>
                    <NavLink
                        className='navbar__nav__link'
                        exact
                        to={ROUTES.CONTACT}
                    >
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
