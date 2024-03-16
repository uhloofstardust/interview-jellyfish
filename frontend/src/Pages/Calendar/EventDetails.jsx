const EventDetails = ({ events }) => {
    if (!events || events.length === 0) {
      return (
        <div className="event-details">No events scheduled for this date.</div>
      );
    }
  
    return (
      <div className="event-details">
        <h2>Events for {selectedDate.toLocaleDateString()}</h2>
        <ul>
          {events.map((event) => (
            <li key={event.eventName}>
              <b>{event.eventName}</b> - {event.topic} (with {event.with})
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EventDetails;
  