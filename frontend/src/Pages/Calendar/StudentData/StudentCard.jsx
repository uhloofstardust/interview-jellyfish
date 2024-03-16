import React from "react";
import "./StudentCard.css";
import Button2 from "../../../components/Button2";

const StudentCard = ({ student }) => {
  let scheduleInterview = () => {
    // add to event data in db
    //
  };

  return (
    <div className="student-card">
      <h3>Name: {student.name}</h3>
      <p>Email: {student.email}</p>
      <p>
        Resume:{" "}
        <a href={student.resume} target="_blank" rel="noopener noreferrer">
          Download
        </a>
      </p>
      {student.interviewScheduled ? (
        <p className="interview-date">
          Interview Date: {student.interviewDate}
        </p>
      ) : (
        <Button2 textContent={"schedule"} action={scheduleInterview} />
      )}
    </div>
  );
};

export default StudentCard;
