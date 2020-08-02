import React from "react";
import { Link } from "react-router-dom";

import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
      }}
    >
      <Link
        to="/"
        style={{ color: "black", fontSize: "1.5rem", marginTop: "1rem" }}
      >
        <h2>Home</h2>
      </Link>
      <Link
        to="/Menu"
        style={{ color: "black", fontSize: "1.5rem", marginTop: "1rem" }}
      >
        <h2>Menu</h2>
      </Link>
      <Link
        to="/Contact"
        style={{ color: "black", fontSize: "1.5rem", marginTop: "1rem" }}
      >
        <h2>Contact</h2>
      </Link>
    </div>
  );
};

export default Navbar;
