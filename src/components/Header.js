import React from "react";

function Header({ connected }) {
  return (
    <div className="header">
      <h1>Spotify Dashboard</h1>
      {!connected === true ? (
        <div className="header__instructions">
          <ul>
            <li>Connect your Spotify device and browser to the same Wi-Fi</li>
            <li>Open your Spotify app</li>
            <li>Under 'Connect to a device', select 'Spotify Dashboard'</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Header;
