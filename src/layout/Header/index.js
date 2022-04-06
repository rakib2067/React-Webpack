import React from "react";

import { NavLink } from "react-router-dom";

import "./index.css";

export function Header() {
  return (
    <header className="header">
      <h1>Music App</h1>
      <ul className="links">
        <NavLink to="/artists">Artists</NavLink>
      </ul>
    </header>
  );
}
