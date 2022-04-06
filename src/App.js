import React, { useState } from "react";

import { Albums } from "./components";
import { ArtistDetails, ArtistHeader } from "./pages";
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
        <Route path="/" element={<Layout />}>
          <Route path="/artists" element={<ArtistHeader />}>
            <Route
              path=":artistId"
              element={<ArtistDetails artists={artists} />}
            />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
