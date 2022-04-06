import React from "react";

import "./index.css";

export function Albums({ albums }) {
  return (
    <ul className="albums">
      {albums.map((a, i) => (
        <li key={i}>
          <div className="cardHeader">
            <h2>{a.name}</h2>
          </div>
          <img className="cardImage" src={a.url} alt="" />
        </li>
      ))}
    </ul>
  );
}
