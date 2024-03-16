import React from "react";
import Button2 from "../../components/Button2";
import JellyLogo from "../../components/JellyLogo";
import { Link, useNavigate } from "react-router-dom";
import "./Interviewer.css";

const Interviewer = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="interviewer-container">
        <div className="logo">
          <JellyLogo />
        </div>
        <h2 className="interviewer-heading">Welcome</h2>
        <div className="">

        </div>
        <div>
          <Button2 textContent={"view candidates and schedule"} action={() => { navigate("/calendar"); }} />
        </div>
      </div>
    </>
  );
};

export default Interviewer;
