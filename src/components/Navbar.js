import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      <Link
        to="/"
        style={{ color: "black", fontSize: "1.5rem", margin: "1rem 1rem 0 0" }}
      >
        <h2>Home</h2>
      </Link>
      <Link
        to="/Menu"
        style={{ color: "black", fontSize: "1.5rem", margin: "1rem 1rem 0 0" }}
      >
        <h2>Menu</h2>
      </Link>
    </div>
  );
};

export default Navbar;
