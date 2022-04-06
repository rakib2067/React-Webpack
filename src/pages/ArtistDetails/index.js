import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Albums, ArtistHeading } from "../../components";

export function ArtistDetails({ artists }) {
  const { artistId } = useParams();
  const [artist, setArtist] = useState();
  useEffect(() => {
    setArtist(artists.find((a) => a.id == artistId));
    console.log("artists", artist);
  }, [artistId]);
  return (
    <>
      {artist && (
        <>
          <h1>Testing {artist.name}</h1>
          <ArtistHeading
            name={artist.name}
            type={artist.type}
            description={artist.description}
          />
          <Albums albums={artist.albums} />
        </>
      )}
    </>
  );
}
