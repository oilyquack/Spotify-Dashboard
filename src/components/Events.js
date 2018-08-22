import React from "react";
import Event from "./Event";

function Events({ eventList }) {
  return (
    <div className="app__events">
      {eventList
        .sort(function(a, b) {
          return (
            new Date(a.dates.start.localDate) -
            new Date(b.dates.start.localDate)
          );
        })
        .map(function(event) {
          return <Event key={event.id} event={event} />;
        })}
    </div>
  );
}

export default Events;
