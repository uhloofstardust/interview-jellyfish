import React, { useEffect, useState } from "react";
import CalendarGrid from "./CalendarGrid";
import StudentData from "./StudentData/StudentData";
import EventDetails from "./EventDetails";
import "./Calendar.css";
import JellyLogo from "../../components/JellyLogo";
import { getDatabase, ref, onValue } from "firebase/database";

const db = getDatabase();

const Calendar = () => {
  const [candidateData, setCandidate] = useState([]);

  useEffect(() => {
    const getCandidateData = async () => {
      const starCountRef = ref(db, "Skilled_Candidate");
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setCandidate(Object.values(data));
        }
      });
    };
    getCandidateData();
  }, []); // Empty dependency array to fetch data only once on component mount

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
        <StudentData studentData={candidateData} className="student-data" />
      </div>
    </div>
  );
};

export default Calendar;
