import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import { auth } from "../firebase-config"; // Import Firebase configuration
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./Signup.css"; // Import the CSS file

const SignUp = () => {
  // State variables for email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook

  // Handle user sign-up
  const handleSignUp = async () => {
    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      alert(`Sign-up successful: ${user.email}`);
      console.log("User created with UID:", user.uid);

      // Navigate to the authentication page after a successful sign-up
      navigate("/Authentication");
    } catch (error) {
      console.error("Error during sign-up:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  // Go Back to Sign In
  const goToSignIn = () => {
    navigate("/Authentication");
  };

  return (
    <div className="signup-container">
      <h1 className="signup-title">Sign Up</h1>
      <p>Create a new account by entering your email and password below:</p>

      {/* Input fields */}
      <div className="signup-input-group">
        <label htmlFor="email" className="signup-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="signup-input"
        />
      </div>
      <div className="signup-input-group">
        <label htmlFor="password" className="signup-label">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="signup-input"
        />
      </div>

      {/* Buttons */}
      <div className="signup-buttons">
        <button onClick={handleSignUp} className="signup-button signup-button-signup">
          Sign Up
        </button>
        <button onClick={goToSignIn} className="signup-button signup-button-back">
          Go Back to Sign In
        </button>
      </div>
    </div>
  );
};

export default SignUp;
