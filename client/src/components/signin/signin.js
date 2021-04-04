import React, { useState } from 'react'
import './styles/signin.css'
export default function SignIn() {
    const [usernameOrPassword, setUsernameOrPassword] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(''); // for firebase

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted form");
        console.log(
            `usernameOrPassword: ${usernameOrPassword}\npassword: ${password}`
        );
    }

    const isValid = usernameOrPassword !== '' && password !== '';

    return (
        <form className="signin" onSubmit={handleSubmit}>
            <label htmlFor="userOrEmail">Username/Email</label>
            <input
                type="text"
                name="userOrEmail"
                id="userOrEmail"
                autoComplete="on"
                onChange={({ target }) => setUsernameOrPassword(target.value)}
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
        </form>
    )
}
