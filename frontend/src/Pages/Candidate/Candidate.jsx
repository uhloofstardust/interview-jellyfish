import React from "react";
import Button2 from "../../components/Button2";
import JellyLogo from "../../components/JellyLogo";
import { Link } from "react-router-dom";
import "./Candidate.css";

const Candidate = () => {
  return (
    <>  
      <div className="candidate-container">
        <div className="logo">
          <JellyLogo />
        </div>
        <h2 className="candidate-heading">Welcome</h2>
        <div className="">

        </div>
        <div>
          <Button2 textContent={"add details"} action={() => {}} />
        </div>
      </div>
    </>
  );
};

export default Candidate;
