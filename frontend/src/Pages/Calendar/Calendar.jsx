import React, { useState } from "react";
import CalendarGrid from "./CalendarGrid";
import StudentData from "./StudentData/StudentData";
import EventDetails from "./EventDetails";
import "./Calendar.css"
import JellyLogo from "../../components/JellyLogo"

let getCandidateData = () => {
  // retrieves candidate list data from database
  // db common for all
  // return as array of objects
  //   {
  //     name: string;
  //     email: string;
  //     resume: string;
  //     interviewScheduled: boolean;
  //     interviewDate?: undefined;
  //   })[]
};

let getCalendarEvents = () => {
  // retrieve event data from database
  // unique for each interviewer
};

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

  // let candidateData = getCandidateData()

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

  // let eventData = getCalendarEvents()

  return (
    <div className="calendar-data-container">
      <div className="logo">
        <JellyLogo />
      </div>
      <div className="calendar-student-grid">
        <CalendarGrid
          month={2}
          year={2024}
          calendarEvents={sampleCalendarEvents}
          className="calendar-grid"
        />
        <StudentData studentData={sampledata} className="student-data" />
      </div>
    </div>
  );
};

export default Calendar;
