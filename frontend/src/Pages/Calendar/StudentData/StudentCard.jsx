import React, { useContext, useState } from "react";
import "./StudentCard.css";
import Button2 from "../../../components/Button2";
import { getDatabase, push, ref, set, update } from "firebase/database";
import { DateContext } from "../../context/DataContext";
import ResumePDF from "./ResumePdf";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

const StudentCard = ({ student }) => {
  // let selectedDate = useContext(DateContext);
  const [selectedDate, setSelectedDate] = useState(null);
  // const dateString = selectedDate.toISOString();

  let scheduleInterview = async(selectedDate) => {
    const db = getDatabase();
    const newData = {
      interviewDate: selectedDate,
      interviewScheduled: "true",
    };
   
    await addEventData(db,student,selectedDate);
    const userRef = ref(db, "Skilled_Candidate/" + student.refId);
    update(userRef, newData) // Use update instead of set
      .then(function () {
        console.log("Interview data updated successfully!");
      })
      .catch(function (error) {
        console.error("Error updating interview data: ", error);
      });
  };



  let addEventData =(db,student,selectedDate)=>{

    const newData ={
       with : student.fullName,
       start : selectedDate,

    }
    const userRef = ref(db, "Event_data/"+student.refId);
    set(userRef, newData) 
      .then(function () {
        console.log("Interview data updated successfully!");
      })
      .catch(function (error) {
        console.error("Error updating interview data: ", error);
      });
  }

  return (
    <div className="student-card">
      <h3>Name: {student.fullName}</h3>
      <p>Email: {student.email}</p>
      <p>
        Resume:{" "}
        <a
          href={
            <ResumePDF
              name={student.fullName}
              skills={student.skills}
              education={student.education}
              misc={student.additionalInfo}
            />
          }
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </p>
      {student.interviewScheduled == "true" ? (
        <p className="interview-date">
          Interview Date: {student.interviewDate}
        </p>
      ) : (
        <>
          <input
            type="date"
            id="interviewDate"
            name="interviewDate"
            onChange={(e) => setSelectedDate(e.target.value)} 
          />
          <Button2 textContent={"schedule"} action={() => {scheduleInterview(selectedDate)}} />
        </>
      )}
    </div>
  );
};

export default StudentCard;
