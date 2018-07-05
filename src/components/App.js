import React from "react";
import Header from "./Header";
import PlayWindow from "./PlayWindow";
import Events from "./Events";
import spotify from "../spotify";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      connected: "",
      artist: "",
      album: "",
      coverArtSrc: "",
      trackName: "",
      events: []
    };

    this.spotifyStateChanged = this.spotifyStateChanged.bind(this);
    this.eventFetch = this.eventFetch.bind(this);
  }

  spotifyStateChanged(state) {
    if (!state) {
      this.setState({
        connected: false,
        artist: "",
        album: "",
        coverArtSrc: "",
        trackName: "",
        events: []
      });
    } else {
      this.setState({
        connected: true,
        artist: state.track_window.current_track.artists[0].name,
        album: state.track_window.current_track.album.name,
        coverArtSrc: state.track_window.current_track.album.images[2].url,
        trackName: state.track_window.current_track.name
      });
      this.eventFetch();
    }
  }

  componentDidMount() {
    spotify(this.spotifyStateChanged);
  }

  eventFetch() {
    fetch(
      `https://app.ticketmaster.com/discovery/v2/events.json?keyword=${
        this.state.artist
      }&apikey=HQQphXuBwD8R3DAz5BZY31GeNYU1fXJn`
    )
      .then(response => response.json())
      .then(json => this.setState({ events: json._embedded.events }))
      .catch(error => this.setState({ events: [] }));
  }

  render() {
    return (
      <div className="app">
        <Header connected={this.state.connected} />
        <div className="app__content">
          {this.state.connected === true ? (
            <PlayWindow
              artist={this.state.artist}
              album={this.state.album}
              coverArtSrc={this.state.coverArtSrc}
              trackName={this.state.trackName}
            />
          ) : (
            <img
              className="placeholder"
              src="https://spotify.i.lithium.com/t5/image/serverpage/image-id/23501i81BB3A6F661F5D33/image-size/original?v=mpbl-1&px=-1"
            />
          )}

          {this.state.events.length && this.state.connected === true ? (
            <Events eventList={this.state.events} />
          ) : !this.state.events.length && this.state.connected ? (
            <div className="app__events">
              <h1>No upcoming events.</h1>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default App;
