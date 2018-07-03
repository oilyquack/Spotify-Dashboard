import React from "react";
import Header from "./Header";
import PlayWindow from "./PlayWindow";
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
        <PlayWindow
          artist={this.state.artist}
          album={this.state.album}
          coverArtSrc={this.state.coverArtSrc}
          trackName={this.state.trackName}
        />
      </div>
    );
  }
}

export default App;
