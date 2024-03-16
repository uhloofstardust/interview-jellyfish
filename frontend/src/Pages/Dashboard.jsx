import React from 'react'
import Button2 from '../components/Button2'
import JellyLogo from '../components/JellyLogo'
import { Link } from 'react-router-dom'
import "./Dashboard.css"

const Dashboard = () => {

  return (
    <>
    <div className='dashboard-container'>
      <div className="logo">
        <JellyLogo />
      </div>
      <div className="button-container">
        <Link to={"/login"}>
          <Button2 textContent="Login" action={() => {}} />
        </Link>
        <Link to={"/signup"}>
          <Button2 textContent="Sign Up" action={() => {}} />
        </Link>
      </div>
    </div>
    </>
  )
}

export default Dashboard