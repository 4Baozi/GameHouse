import React, { useState } from 'react';
import './styles/signin.css';
import firebase from '../../config/firebase-config';
import { socialMediaAuth } from '../../service/auth';
import { googleProvider } from '../../config/authentication-methods';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { FcGoogle } from 'react-icons/fc';
import { BiShow, BiHide } from 'react-icons/bi';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // for firebase
    const [passwordShown, setPasswordShown] = useState(false);
    const [errorActive, setErrorActive] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((response) => console.log(response))
            .catch((error) => {
                setError(error.message);
                setErrorActive(true);
                setTimeout(() => {
                    setError('');
                    setErrorActive(false);
                }, 3000);
            });
    };

    const handleOnClick = async (provider) => {
        try {
            const response = await socialMediaAuth(provider);
        } catch (error) {
            setError(error.message);
        }
    };

    const handlePasswordToggle = () => {
        setPasswordShown(!passwordShown);
    };
    const isValid = email !== '' && password !== '';

    return (
        <div className='sign-in-container'>
            <h3 className='title'>Sign In</h3>
            <form className='form' onSubmit={handleSubmit}>
                <label className='form__lbl' htmlFor='email'>
                    Email
                </label>
                <input
                    className='form__input'
                    type='text'
                    name='email'
                    id='email'
                    autoComplete='off'
                    placeholder='Email address'
                    onChange={({ target }) => setEmail(target.value)}
                />
                <label className='form__lbl' htmlFor='password'>
                    Password
                </label>
                <div className='form__password'>
                    <input
                        className='form__input'
                        type={passwordShown ? 'text' : 'password'}
                        name='password'
                        id='password'
                        autoComplete='off'
                        placeholder='Password'
                        onChange={({ target }) => setPassword(target.value)}
                    />
                    <div
                        className='password-icon'
                        tooltip={
                            passwordShown ? 'Hide password' : 'Show password'
                        }
                        onClick={handlePasswordToggle}
                    >
                        {passwordShown ? <BiHide /> : <BiShow />}
                    </div>
                </div>

                <button
                    className='form__btn reg'
                    type='submit'
                    disabled={!isValid}
                >
                    Sign In
                </button>
                <button
                    className='form__btn auth'
                    onClick={() => handleOnClick(googleProvider)}
                >
                    <FcGoogle className='form__icon' /> Sign in with Google
                </button>
                <div
                    className={`form__error ${
                        errorActive ? 'form__error--active' : ''
                    }`}
                >
                    {error}
                </div>
            </form>

            <div className='form__redirect'>
                Don't have an account?{' '}
                <NavLink className='form__link' exact to={ROUTES.SIGN_UP}>
                    Sign up
                </NavLink>
            </div>
        </div>
    );
}
