import React, { useState } from 'react'
import './styles/signup.css'
import firebase from '../../config/firebase-config'
import { socialMediaAuth } from '../../service/auth'
import { googleProvider } from '../../config/authentication-methods'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import * as ROUTES from '../../constants/routes'

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // for firebase

    const handleOnClick = async provider => {
        const response = await socialMediaAuth(provider);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => console.log(response.user))
            .catch(error => setError(error.message));

    }

    const isValid = email !== '' && username !== '' && password !== '';

    return (
        <>

            <form className="signup" onSubmit={handleSubmit}>
                <div className="error">{error}</div>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="on"
                    onChange={({ target }) => setEmail(target.value)}
                />
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="off"
                    onChange={({ target }) => setUsername(target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button type="submit" disabled={!isValid}>Sign Up</button>
                <button onClick={() => handleOnClick(googleProvider)}>Google</button>
            </form>
            
            <div className="redirect-login">
                Already have an account? <NavLink className="link" exact to={ROUTES.SIGN_IN}>Sign in</NavLink>
            </div>
        </>
    )
}
