import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">
        Welcome! Navigate to the desired page using the links below:
      </h1>
      <nav className="home-nav">
        <Link to="/Authentication" className="home-link">
          Authentication
        </Link>
        <Link to="/AddProfile" className="home-link">
          Add a Profile
        </Link>
        <Link to="/DisplayProfiles" className="home-link">
          View Profiles
        </Link>
        <Link to="/database-data" className="home-link">
          Database Data
        </Link>
        <Link to="/delete-user" className="home-link">
          Delete a User
        </Link>
        <Link to="/storage" className="home-link">
          Upload a File
        </Link>
        <Link to="/download-files" className="home-link">
          Download and Delete Files
        </Link>
      </nav>
    </div>
  );
};

export default Home;
