import React, { useState } from "react";

import { ArtistHeader, Albums } from "./components";
import { ArtistDetails } from "./pages/ArtistDetails";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

import data from "./DummyData";

export default function App() {
  const [artists, setArtists] = useState(data);
  const renderArtists = () =>
    artists.map((artist, i) => {
      return (
        <>
          <Header
            key={artist.id}
            name={artist.name}
            type={artist.type}
            description={artist.description}
          />
          <Albums key={artist.name} albums={artists[i].albums} />;
        </>
      );
    });

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}
