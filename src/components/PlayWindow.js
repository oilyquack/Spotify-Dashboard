import React from "react";

function PlayWindow({ artist, album, coverArtSrc, trackName }) {
  return (
    <div className="app__playWindow">
      <h1>{artist}</h1>
      <img className="app__playWindow__img" src={coverArtSrc} />
      <p>{trackName}</p>
      <p>
        <i>{album}</i>
      </p>
    </div>
  );
}

export default PlayWindow;
