import React, { useEffect, useState } from "react";
import { db } from "../firebase-config"; // Import your Firebase config
import { collection, getDocs } from "firebase/firestore"; // Firestore methods
import "./DisplayProfiles.css"; // Import optional styling

const DisplayProfiles = () => {
  const [profiles, setProfiles] = useState([]); // State to store profiles
  const [loading, setLoading] = useState(true); // Loading state

  // Fetch profiles from Firestore
  const fetchProfiles = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "profiles")); // Fetch "profiles" collection
      const profilesData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProfiles(profilesData); // Update state with fetched profiles
      setLoading(false); // Set loading to false
    } catch (error) {
      console.error("Error fetching profiles:", error);
    }
  };

  useEffect(() => {
    fetchProfiles(); // Fetch profiles when the component mounts
  }, []);

  return (
    <div className="display-profiles-container">
      <h1>Profiles</h1>
      {loading ? (
        <p>Loading profiles...</p>
      ) : profiles.length > 0 ? (
        <table className="profiles-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {profiles.map((profile) => (
              <tr key={profile.id}>
                <td>{profile.firstName}</td>
                <td>{profile.lastName}</td>
                <td>{profile.age}</td>
                <td>{profile.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No profiles found.</p>
      )}
    </div>
  );
};

export default DisplayProfiles;
