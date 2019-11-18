import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink className="link" to="/1">
            Урок <span>№</span>1
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
