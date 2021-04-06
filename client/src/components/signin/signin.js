import React, { useState } from 'react'
import './styles/signin.css'
import firebase from '../../config/firebase-config'
import { socialMediaAuth } from '../../service/auth'
import { googleProvider } from '../../config/authentication-methods'

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // for firebase

    const handleSubmit = (event) => {
        event.preventDefault();
       
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .catch(error => console.log(error));
    }

    const handleOnClick = async provider => {
        const response = await socialMediaAuth(provider);
    }

    const isValid = email !== '' && password !== '';

    return (
        <form className="signin" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                id="email"
                autoComplete="on"
                onChange={({ target }) => setEmail(target.value)}
            />
            <label htmlFor="username">Username</label>
            <input
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                onChange={({ target }) => setPassword(target.value)}
            />
            <button type="submit" disabled={!isValid}>Sign In</button>
            <button onClick={() => handleOnClick(googleProvider)}>Google</button>
        </form>
    )
}
