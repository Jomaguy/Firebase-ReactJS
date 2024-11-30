import React, { useState } from "react";
import { db } from "../firebase-config"; // Assuming firebase-config.js exports 'db'
import { collection, addDoc } from "firebase/firestore"; // Firestore methods
import "./AddProfile.css"; // Optional: Import CSS for styling

const AddProfile = () => {
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    // Validate form fields
    if (!firstName || !lastName || isNaN(age) || !email) {
      alert("Please fill out all fields correctly.");
      return;
    }

    try {
      // Add data to the "profiles" collection in Firestore
      const docRef = await addDoc(collection(db, "profiles"), {
        firstName: firstName,
        lastName: lastName,
        age: parseInt(age, 10), // Convert age to number
        email: email,
        createdAt: new Date().toISOString(), // Timestamp
      });

      alert(`Profile added successfully with ID: ${docRef.id}`);
      console.log("Profile added with ID:", docRef.id);

      // Reset form fields
      setFirstName("");
      setLastName("");
      setAge("");
      setEmail("");
    } catch (error) {
      console.error("Error adding profile:", error);
      alert("Failed to add profile. Check the console for details.");
    }
  };

  return (
    <div className="add-profile-container">
      <h1>Add Profile</h1>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit Profile
        </button>
      </form>
    </div>
  );
};

export default AddProfile;
