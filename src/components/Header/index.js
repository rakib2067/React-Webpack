import React from "react";

export function ArtistHeading({ name, type, description, color }) {
  return (
    <section>
      <h1 style={{ color: color }}>Artist Name: {name}</h1>
      <p style={{ color: color }}>Genre: {type}</p>
      <p style={{ color: color }}>{description}</p>
    </section>
  );
}
