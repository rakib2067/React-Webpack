import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Albums, ArtistHeading } from "../../components";

import "./index.css";

export function ArtistDetails({ artists }) {
  const { artistId } = useParams();
  const [artist, setArtist] = useState();
  const [random, setRandom] = useState("#ccc");

  useEffect(() => {
    setArtist(artists.find((a) => a.id == artistId));
  }, [artistId]);

  useEffect(() => {
    let int = setInterval(() => {
      let randColor = Math.floor(Math.random() * 16777215).toString(16);
      setRandom((r) => `#${randColor}`);
    }, 1000);

    return () => {
      clearInterval(int);
    };
  }, []);

  return (
    <>
      {artist && (
        <div style={{ backgroundColor: random }} className="artistDetails">
          <ArtistHeading
            name={artist.name}
            type={artist.type}
            description={artist.description}
          />
          <Albums albums={artist.albums} />
        </div>
      )}
    </>
  );
}
