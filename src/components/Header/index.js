import React from "react";

export function ArtistHeading({ name, type, description }) {
  return (
    <header>
      <h1>Artist Name: {name}</h1>
      <p>Genre: {type}</p>
      <p>{description}</p>
    </header>
  );
}
