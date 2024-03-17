import React from "react";
import StudentCard from "./StudentCard";
import "./StudentData.css"

const StudentData = ({ studentData }) => {
  return (
    <div className="student-data">
      <h2 className="student-data-heading">Student Data</h2>
      {console.log(studentData)}
      <div>
        {studentData.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
};

export default StudentData;
