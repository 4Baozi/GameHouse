import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import './styles/bottomnav.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AiOutlineHome, AiOutlineContacts } from 'react-icons/ai';
import { RiGalleryLine } from 'react-icons/ri';
import { BsInfoSquare } from 'react-icons/bs';
export default function BottomNav() {
    return (
        <nav className='bot-navbar'>
            <ul className='bot-navbar__nav'>
                <li className='bot-navbar__nav__item'>
                    <NavLink
                        className='bot-navbar__nav__link'
                        exact
                        to={ROUTES.HOME}
                    >
                        {/* <FontAwesomeIcon icon='check-square' /> */}
                        {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
                        <AiOutlineHome className='icon' />
                        Home
                    </NavLink>
                </li>
                <li className='bot-navbar__nav__item'>
                    <NavLink
                        className='bot-navbar__nav__link'
                        exact
                        to={ROUTES.ABOUT}
                    >
                        <BsInfoSquare className='icon' />
                        About
                    </NavLink>
                </li>
                <li className='bot-navbar__nav__item'>
                    <NavLink
                        className='bot-navbar__nav__link'
                        exact
                        to={ROUTES.BROWSE}
                    >
                        <RiGalleryLine className='icon' />
                        Gallery
                    </NavLink>
                </li>
                <li className='bot-navbar__nav__item'>
                    <NavLink
                        className='bot-navbar__nav__link'
                        exact
                        to={ROUTES.CONTACT}
                    >
                        <AiOutlineContacts className='icon' />
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
