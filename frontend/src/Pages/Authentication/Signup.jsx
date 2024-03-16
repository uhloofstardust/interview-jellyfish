import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database"; // Import database
import { app } from "../firebase/firebase";
import Button2 from "../../components/Button2";
import "./Login.css";
import JellyLogo from "../../components/JellyLogo";

const auth = getAuth(app);
const database = getDatabase(app); // Initialize database

const SignUpForm = ({ isLogin, setLogin }) => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(""); // State to manage the selected role
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    setLogin(false);
    navigate("/");
  };

  const SignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(userCredential.user);

      alert("Account is Created. Please check your email for verification.");

      await writeUserData(userCredential.user.uid);
    } catch (error) {
      console.error(error.code, error.message);
      alert(error.message);
    }
  };

  const writeUserData = async (userId) => {
    try {
      await set(ref(database, "users/" + userId), {
        name: name,
        email: email,
        password: password,
        role: role,
      });
    } catch (error) {
      console.error(error.code, error.message);
      alert(error.message);
    }
  };

  return (
    <div className="login-box">
      <div className="logo">
        <JellyLogo />
      </div>
      <h3 className="login-heading">Sign up</h3>
      <div className="flex flex-col items-center justify-center">
        <input
          type="text"
          className="input text-input"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          type="email"
          className="input text-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          className="input text-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>

        {/* Dropdown for selecting role */}
        <div className="relative role-dropdown">
          <button
            onClick={toggleDropdown}
            className="role-btn text-black px-2 py-1 w-4/5 md:w-full m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          >
            {role ? role : "Select Role"}
          </button>
          {isOpen && (
            <div className="absolute mt-1 w-4/5 md:w-full bg-white border border-gray-300 rounded-md shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setRole("Candidate");
                  toggleDropdown();
                }}
              >
                Candidate
              </button>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => {
                  setRole("Interviewer");
                  toggleDropdown();
                }}
              >
                Interviewer
              </button>
            </div>
          )}
        </div>

        <div className="signup-btn">
          <Button2 textContent={"Sign up"} action={SignUp} />
        </div>
      </div>

      <div className="no-account-action">
        <Link to={"/login"}>Already have an account? Click here</Link>
      </div>

      <div className="no-account-action">
        <Link to={"/"}>go back</Link>
      </div>

    </div>
  );
};

export default SignUpForm;
