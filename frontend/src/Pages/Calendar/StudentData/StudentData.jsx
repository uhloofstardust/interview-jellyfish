import React from "react";
import StudentCard from "./StudentCard";

const StudentData = ({ studentData }) => {
  return (
    <div>
      <h2>Student Data</h2>
      {studentData.map((student, index) => (
        <StudentCard key={index} student={student} />
      ))}
    </div>
  );
};

export default StudentData;
