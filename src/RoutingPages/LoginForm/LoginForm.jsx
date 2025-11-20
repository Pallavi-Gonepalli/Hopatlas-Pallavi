import {Link} from 'react-router-dom';
import { useState } from "react";
import "./LoginForm2.css";

function LoginForm() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Button Clicked");
        // fake login success for demo
        if (name && password) {
            setLoggedIn(true);
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        setName("");
        setPassword("");
    };

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1 className="login-title">
                    {loggedIn ? "Welcome back" : "Login to your account"}
                </h1>

                {!loggedIn && (
                    <>
                        <div className="form-group">
                            <label htmlFor="name">Username</label>
                            <input
                                id="name"
                                type="text"
                                value={name}
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="pwd">Password</label>
                            <input
                                id="pwd"
                                type="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button type="button" className="btn-primary" onClick={handleLogin}>
                            Login
                        </button>

                        <p className="helper-text" >
                            New here?
                            <Link to="/RegisterForm" className="link">
                                Register
                            </Link>
                        </p>
                    </>
                )}

                {loggedIn && (
                    <div className="logged-in-block">
                        <p className="success-text">You are now logged in as {name}.</p>
                        <button
                            type="button"
                            className="btn-secondary"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginForm;
