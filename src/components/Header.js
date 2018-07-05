import React from "react";

function Header({ connected }) {
  return (
    <div className="header">
      <h1>Spotify Dashboard</h1>
      {!connected === true ? (
        <ul>
          <li>Make sure your devices are connected to the same Wi-Fi</li>
          <li>Open your Spotify app</li>
          <li>Under 'Connect to a device', select 'Spotify Dashboard'</li>
          <li>Watch the magic unfold</li>
        </ul>
      ) : null}
    </div>
  );
}

export default Header;
