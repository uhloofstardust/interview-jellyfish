import React, { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import StudentData from "./StudentData/StudentData";
import EventDetails from "./EventDetails";
// import "Calendar.css"

const Calendar = () => {
  let sampledata = [
    {
      name: "Sanved",
      email: "test@test",
      resume: "resume.pdf",
      interviewScheduled: true,
      interviewDate: "2003-12-19T10:00:00",
    },
    {
      name: "Sanved",
      email: "test@test",
      resume: "resume.pdf",
      interviewScheduled: false,
    },
  ];
  let sampleCalendarEvents = [
    {
      eventName: "Interview",
      topic: "PQR",
      with: "Sanved",
      when: "2024-03-01T10:00:00",
    },
    {
      eventName: "Interview2",
      topic: "XYZ",
      with: "ABC",
      when: "2024-03-20T10:00:00",
    },
  ];

  return (
    <>
      {/* month 0: jan, 1: feb, and so on */}
      {/* year like year */}
      <CalendarGrid
        month={2}
        year={2024}
        calendarEvents={sampleCalendarEvents}
      />
      <StudentData studentData={sampledata} />
    </>
  );
};

export default Calendar;
