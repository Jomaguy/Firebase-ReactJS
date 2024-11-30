import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Authentication from './components/Authentication';
import Signup from './components/Signup';
import AddProfile from './components/AddProfile';
import DisplayProfiles from './components/DisplayProfiles';
import './App.css';

// Import other components...

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Authentication" element={<Authentication />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/AddProfile" element={<AddProfile />} />
                <Route path="/DisplayProfiles" element={<DisplayProfiles />} />
                {/* Add other routes here */}
            </Routes>
        </Router>
    );
};

export default App;


