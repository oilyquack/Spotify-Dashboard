import React from "react";
import Event from "./Event";

function Events({ eventList }) {
  return (
    <div className="app__events">
      <h1>Upcoming Events</h1>
      {eventList.map(function(event) {
        return <Event key={event.id} event={event} />;
      })}
    </div>
  );
}

export default Events;
