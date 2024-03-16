import React, { useContext } from "react";
import "./StudentCard.css";
import Button2 from "../../../components/Button2";
import { getDatabase, push, ref, set, update } from "firebase/database";
import { DateContext } from "../../context/DataContext";

const StudentCard = ({ student }) => {
  let selectedDate = useContext(DateContext);
   selectedDate = new Date("Sat Mar 09 2024 00:00:00 GMT+0530 (India Standard Time)");
const dateString = selectedDate.toISOString();

  let scheduleInterview = () => {
    const db = getDatabase();
    const newData = {
      interviewDate: dateString,
      interviewScheduled:"true"
    };
   
    const userRef = ref(db, "Skilled_Candidate/" + student.refId );
    update(userRef, newData) // Use update instead of set
      .then(function () {
        console.log("Interview data updated successfully!");
      })
      .catch(function (error) {
        console.error("Error updating interview data: ", error);
      });

  };

  return (
    <div className="student-card">
      <h3>Name: {student.fullName}</h3>
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
