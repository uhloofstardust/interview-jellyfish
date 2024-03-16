import React, { useState } from "react";
import "./CalendarGrid.css";

const CalendarGrid = ({ month, year, calendarEvents }) => {
  const [selectedDate, setSelectedDate] = useState(new Date(year, month, 1));
  const [selectedEventDetails, setSelectedEventDetails] = useState(null);
  const handleDateClick = (date) => {
    setSelectedDate(date);
    const eventDetails = findEventDetails(date, calendarEvents);
    setSelectedEventDetails(eventDetails);
  };

  const generateDays = () => {
    const days = [];
    const firstDay = new Date(year, month, 1);
    const startingWeekday = firstDay.getDay();
    const numDays = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startingWeekday; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty" />);
    }

    if (!calendarEvents || !Array.isArray(calendarEvents)) {
      console.warn("calendarEvents prop is missing.");
      return days;
    }

    for (let i = 1; i <= numDays; i++) {
      const date = new Date(year, month, i);
      const isToday =
        i === selectedDate.getDate() &&
        date.getMonth() === selectedDate.getMonth() &&
        date.getFullYear() === selectedDate.getFullYear();

      let hasEvent = false;
      let eventDetails = null;

      for (const event of calendarEvents) {
        const eventDate = new Date(event.when);
        if (
          eventDate.getDate() === i &&
          eventDate.getMonth() === month &&
          eventDate.getFullYear() === year
        ) {
          hasEvent = true;
          eventDetails = event;
          break;
        }
      }

      days.push(
        <div
          key={`${year}-${month}-${i}`}
          className={`calendar-day ${isToday ? "selected" : ""} ${
            hasEvent ? "event" : ""
          }`}
          onClick={() => handleDateClick(date)}
        >
          {i}
          <p>{/* placeholder */}</p>
          {isToday || hasEvent ? (
            <div className="event-details">
              {/* we could add some dot icon here */}
            </div>
          ) : null}
        </div>
      );
    }

    return days;
  };

  const renderWeekdays = () => {
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return weekdays.map((day) => (
      <div key={day} className="weekday">
        {day}
      </div>
    ));
  };

  return (
    <div className="calendar">
      <h1>Calendar</h1>
      <div className="weekdays">{renderWeekdays()}</div>
      <div className="calendar-container">
        <div className="calendar-grid">{generateDays()}</div>
        <div className="selected-date-details">
          {selectedEventDetails && (
            <>
              <p>
                <b>Date: </b>
                {selectedDate.toLocaleDateString()}
              </p>
              <p>
                <b>Events:</b>
              </p>
              <ul>
                {selectedEventDetails.map((event) => (
                  <li key={event.id}>
                    {event.eventName} - {event.topic}
                  </li>
                ))}
              </ul>
            </>
          )}
          {!selectedEventDetails && <p>No events scheduled for this date.</p>}
        </div>
      </div>
    </div>
  );
};

const findEventDetails = (date, calendarEvents) => {
  const matchingEvents = [];
  if (!calendarEvents || !Array.isArray(calendarEvents)) return matchingEvents;

  for (const event of calendarEvents) {
    const eventDate = new Date(event.when);
    if (
      eventDate.getDate() === date.getDate() &&
      eventDate.getMonth() === date.getMonth() &&
      eventDate.getFullYear() === date.getFullYear()
    ) {
      matchingEvents.push(event);
    }
  }
  return matchingEvents;
};

export default CalendarGrid;
