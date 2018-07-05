import React from "react";

function Event({ event }) {
  return (
    <div className="app__events__event">
      <p>{event.dates.start.localDate}</p>
      <p>{event._embedded.venues[0].name}</p>
      <p>
        {event._embedded.venues[0].city.name},{" "}
        {event._embedded.venues[0].country.name}
      </p>
      {event.dates.status.code === "onsale" ? (
        <p>
          <a href={event.url} target="_blank">
            Get tickets here!
          </a>
        </p>
      ) : (
        <p>Tickets aren't available right now</p>
      )}
    </div>
  );
}

export default Event;
