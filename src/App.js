import React, { useState } from "react";

import { Albums } from "./components";
import { ArtistDetails, ArtistHeader } from "./pages";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./layout";

import data from "./DummyData";

export default function App() {
  const [artists, setArtists] = useState(data);

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
