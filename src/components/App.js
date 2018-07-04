import React from "react";
import Header from "./Header";
import PlayWindow from "./PlayWindow";
import Events from "./Events";
import spotify from "../spotify";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
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
    this.setState({
      artist: state.track_window.current_track.artists[0].name,
      album: state.track_window.current_track.album.name,
      coverArtSrc: state.track_window.current_track.album.images[2].url,
      trackName: state.track_window.current_track.name
    });
    this.eventFetch();
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
        <Header />
        <div className="app__content">
          <PlayWindow
            artist={this.state.artist}
            album={this.state.album}
            coverArtSrc={this.state.coverArtSrc}
            trackName={this.state.trackName}
          />
          {this.state.events.length ? (
            <Events eventList={this.state.events} />
          ) : (
            <div className="app__events">
              <h1>There are no upcoming events.</h1>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
