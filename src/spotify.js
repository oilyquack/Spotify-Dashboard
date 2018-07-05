const config = {
  token:
    "BQBWCYtSlcWKbKYNT1uBeR7CM_d-cWSt2V1sGPGe4jBemOYFGr-0kzuoBo0nj_svc2GsMv2JGF4JHhPg7oTPOWZ0_t2ugRZua_VtFMtpmsUHR7QQI10k3Scij8dCPkWxA2hARrpwyp5sjqYqEro2ZTIWLxDfcxzPXAEY",
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
    console.log("Player state changed", state);
    myStateChanged(state);
  });

  player.getCurrentState().then(state => {
    if (!state) {
      console.error("User is not playing music through the Web Playback SDK");
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
