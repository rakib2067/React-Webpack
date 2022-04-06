import React from "react";

import { NavLink, useNavigate } from "react-router-dom";

import "./index.css";

export function Header() {
  const nav = useNavigate();
  return (
    <header className="header">
      <h1 className="title" onClick={() => nav("/")}>
        Music App
      </h1>
      <ul className="links">
        <NavLink to="/artists">Artists</NavLink>
      </ul>
    </header>
  );
}
