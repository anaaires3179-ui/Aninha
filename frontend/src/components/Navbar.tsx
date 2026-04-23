import React from 'react';
import './Navbar.css';  // Ensure to create this CSS file for styling

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src="/path-to-logo.png" alt="Logo" />  {/* Update path to your logo */}
            </div>
            <ul className="navbar-menu">
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            <div className="navbar-user">
                <button className="user-dropdown">User</button>
                {/* Dropdown can be implemented here */}
            </div>
        </nav>
    );
};

export default Navbar;
