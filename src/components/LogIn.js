import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from "react-router-dom"; // For navigating to the Sign Up page
import './login.css';  // Importing the external CSS file
import '../App.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();  // Hook for navigation

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            alert("Login successful!");
        } catch (error) {
            console.error("Error logging in:", error);
            alert("Login failed! Please check your credentials.");
        }
    };

    const handleSignUp = () => {
        navigate("/signup");  // Navigate to the Sign Up page
    };

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="email"
                    className="input-field"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    className="input-field"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="submit-button">Login</button>
            </form>
            <p className="signup-link">
                Don't have an account?{" "}
                <span className="signup-link-text" onClick={handleSignUp}>
                    Sign Up
                </span>
            </p>
        </div>
    );
};

export default Login;
