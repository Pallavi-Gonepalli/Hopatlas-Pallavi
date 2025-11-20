import {Link} from 'react-router-dom';
import { useState } from "react";
import "./RegisterForm2.css";

function RegisterForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName]   = useState("");
    const [email, setEmail]         = useState("");
    const [password, setPassword]   = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = () => {
        console.log("Register Successful");
        // later: add validation, API call etc.
    };

    return (
        <div className="register-wrapper">
            <div className="register-card">
                <h1 className="register-title">Create your HopAtlas account</h1>
                <p className="register-subtitle">
                    Join us to search, save and manage your favorite trips.
                </p>

                <div className="register-grid">
                    <div className="form-group">
                        <label htmlFor="fname">First name</label>
                        <input
                            id="fname"
                            type="text"
                            value={firstName}
                            placeholder="First name"
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lname">Last name</label>
                        <input
                            id="lname"
                            type="text"
                            value={lastName}
                            placeholder="Last name"
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        placeholder="you@example.com"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="register-grid">
                    <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input
                            id="pwd"
                            type="password"
                            value={password}
                            placeholder="Create a password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cpwd">Confirm password</label>
                        <input
                            id="cpwd"
                            type="password"
                            value={confirmPassword}
                            placeholder="Confirm password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    type="button"
                    className="btn-primary register-btn"
                    onClick={handleRegister}
                >
                    Create account
                </button>

                <p className="form-footer">
                    Already have an account?
                    <Link to="/LoginForm" className="link">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default RegisterForm;
