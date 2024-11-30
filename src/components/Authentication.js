import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase-config"; // Import Firebase configuration
import { signInWithEmailAndPassword } from "firebase/auth"; // Import Firebase methods
import "./Authentication.css"; // Import the CSS file

const Authentication = () => {
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const [signInStatus, setSignInStatus] = useState("Unknown"); // State for sign-in status
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle Email/Password Sign-In
  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user; // Get signed-in user
      setSignInStatus(`Sign-in successful: ${user.email}`);
      console.log("Signed in as:", user.email);
    } catch (error) {
      setSignInStatus(`Error: ${error.message}`);
      console.error("Error signing in:", error.message);
    }
  };

  // Navigate to Sign-Up Page
  const navigateToSignUp = () => {
    navigate("/Signup"); // Navigate to the Sign Up page
  };

  return (
    <div className="auth-container">
      <h1 className="auth-title">Firebase Authentication</h1>

      {/* Email/Password Sign-In */}
      <section className="auth-section">
        <p>Sign in with your email and password:</p>
        <div className="auth-input-group">
          <label htmlFor="email" className="auth-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="auth-input"
          />
        </div>
        <div className="auth-input-group">
          <label htmlFor="password" className="auth-label">
            Password:
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="auth-input"
          />
        </div>
        <button onClick={handleSignIn} className="auth-button auth-button-signin">
          Sign In
        </button>
      </section>

      {/* Navigation to Sign-Up */}
      <section className="auth-section">
        <button onClick={navigateToSignUp} className="auth-button auth-button-signup">
          Sign Up
        </button>
      </section>

      {/* Sign-In Status */}
      <div className="auth-status">
        <p><strong>Sign-in status:</strong> {signInStatus}</p>
      </div>
    </div>
  );
};

export default Authentication;
