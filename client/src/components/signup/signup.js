import React, { useState } from 'react'
import './styles/signup.css'

export default function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // for firebase

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted form");
        console.log(
            `email: ${email}\nusername: ${username}\npassword: ${password}`
        );
    }

    const isValid = email !== '' && username !== '' && password !== '';

    return (
        <form className="signup" onSubmit={handleSubmit}>
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
        </form>
    )
}
