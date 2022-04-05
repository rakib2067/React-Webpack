import React from "react";

export function Albums({ albums }) {
  return (
    <ul>
      {albums.map((a, i) => (
        <li key={i}>{a.name}</li>
      ))}
    </ul>
  );
}
