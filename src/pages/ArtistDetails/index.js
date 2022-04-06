import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Albums, ArtistHeading } from "../../components";

import "./index.css";

export function ArtistDetails({ artists }) {
  const { artistId } = useParams();
  const [artist, setArtist] = useState();
  useEffect(() => {
    setArtist(artists.find((a) => a.id == artistId));
  }, [artistId]);
  return (
    <>
      {artist && (
        <div className="artistDetails">
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
