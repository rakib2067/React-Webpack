import React from "react";
import { NavLink, Outlet } from "react-router-dom";

import "./index.css";

export function ArtistHeader() {
  return (
    <>
      <ul className="artistLinks">
        <NavLink className="artistLink" to="/artists/1">
          Dave
        </NavLink>
        <NavLink className="artistLink" to="/artists/2">
          J. Cole
        </NavLink>
        <NavLink className="artistLink" to="/artists/3">
          Meek Mill
        </NavLink>
      </ul>

      <Outlet />
    </>
  );
}
