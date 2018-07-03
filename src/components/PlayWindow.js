import React from "react";

function PlayWindow({ artist, album, coverArtSrc, trackName }) {
  return (
    <div>
      <h1>{artist}</h1>
      <img src={coverArtSrc} />
      <p>{album}</p>
      <p>{trackName}</p>
    </div>
  );
}

export default PlayWindow;
