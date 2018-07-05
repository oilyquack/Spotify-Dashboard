const config = {
  token:
    "BQAqG4PPFIjtlNh5gxa-4lIrolIyjxOEmtElto5RFxpZxlpWWh_KBkxU66ZhIMIGKnS6PxpetecTiav-B9p6gKfeWySDt7wabhLCNqvJirvxv_nt8zsiIn46kH9O8ETiOh0vUZaQ9QoafTuGRVWRcPYaR_nCsnaS7QNI",
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
    myStateChanged(state);
  });

  player.getCurrentState().then(state => {
    if (!state) {
      console.log("User is not connected");
      return;
    }
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
