import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

import SidebarVertical from "../components/SidebarVertical.js";

const Navbar = () => {
  return (
    <div
      className='link-wrapper'
    >
      <Link
        to="/"
        className='link'
      >
        <h2>Home</h2>
      </Link>
      <Link
        to="/Menu"
        className='link'
      >
        <h2>Menu</h2>
      </Link>
      <Link
        to="/AboutUs"
        className='link'
      >
        <h2>About Us</h2>
      </Link>
      <SidebarVertical />
    </div>
  );
};

export default Navbar;
