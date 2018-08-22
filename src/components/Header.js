import React from "react";

function Header({ connected }) {
  return (
    <div className="header">
      <h1>Spotify Dashboard</h1>

      {!connected === true ? (
        <div className="header__instructions">
          <ul>
            <li>Connect your Spotify device and browser to the same Wi-Fi</li>
            <li>
              Under 'Connect to a device' in your Spotify App, select 'Spotify
              Dashboard'
            </li>
            <li>
              Get your Spotify token{" "}
              <a
                href="https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#"
                target="_blank"
              >
                here
              </a>{" "}
              and enter it below.
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
