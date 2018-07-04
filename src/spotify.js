const config = {
  token:
    "BQDRkv8g8jHWIh8b6EaTDOYwwrzCj0zItxtKYhRX-SeemZPIrDoKw8GajTDrX-CP2dzs3ZPVplZW_yshl1bQPLvE8A2jpWRkrmLtFCpHwnfipCyuA5SVRzOuFLDq_qBVev4PWHfB4H63CqzHkqk3GnaT7TC2TNf8PHns",
  url: "https://api.spotify.com"
};

let myStateChanged;
export default function(stateChanged) {
  myStateChanged = stateChanged;
}

window.onSpotifyWebPlaybackSDKReady = () => {
  const token = config.token;
  const player = new Spotify.Player({
    name: "Spotify Dashboard",
    getOAuthToken: cb => {
      cb(token);
    }
  });

  // Error handling
  player.addListener("initialization_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("authentication_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("account_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("playback_error", ({ message }) => {
    console.error(message);
  });

  // Playback status updates
  player.addListener("player_state_changed", state => {
    console.log(state);
    myStateChanged(state);
  });

  // Ready
  player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
  });

  // Not Ready
  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });

  // Connect to the player!
  player.connect();
};
