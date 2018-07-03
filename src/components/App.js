import React from "react";
import Header from "./Header";
import spotify from "../spotify";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      artist: "",
      album: "",
      coverArtSrc: "",
      trackName: ""
    };

    this.spotifyStateChanged = this.spotifyStateChanged.bind(this);
  }

  spotifyStateChanged(state) {
    this.setState({
      artist: state.track_window.current_track.artists[0].name,
      album: state.track_window.current_track.album.name,
      coverArtSrc: state.track_window.current_track.album.images[2].url,
      trackName: state.track_window.current_track.name
    });
  }

  componentDidMount() {
    spotify(this.spotifyStateChanged);
  }

  render() {
    return (
      <div>
        <Header />
        <h1>{this.state.artist}</h1>
        <img src={this.state.coverArtSrc} />
        <p>{this.state.album}</p>
        <p>{this.state.trackName}</p>
      </div>
    );
  }
}

export default App;
