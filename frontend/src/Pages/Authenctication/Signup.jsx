import React, { useState } from "react";
import { Facebook, GitHub, Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../firebase/firebase";

const auth = getAuth(app);

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

  const SignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (user) => {
        console.log(user);
        alert("Account is Created ");

        writeUserData(user.user?.uid, name, email, password, role);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + " " + errorMessage);
        alert(error)
      });

    function writeUserData(userId, name, email, password, role) {
      const db = getDatabase();
      set(ref(db,"users/" + userId), {
        name: name,
        email: email,
        password: password,
        role: role,
      });
    }
  };

  return (
    <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
      <h2 className="p-3 text-3xl font-bold text-white">Horiz</h2>
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <h3 className="text-xl font-semibold text-white pt-2">Create Account!</h3>
      <div className="flex space-x-2 m-4 items-center justify-center">
        <div className="socialIcon border-white">
          <Facebook className="text-white" />
        </div>
        <div className="socialIcon border-white">
          <GitHub className="text-white" />
        </div>
        <div className="socialIcon border-white">
          <Google className="text-white" />
        </div>
      </div>
      {/* Inputs */}
      <div className="flex flex-col items-center justify-center mt-2">
        <input
          type="text"
          className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          type="email"
          className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <input
          type="password"
          className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>

        {/* Dropdown for selecting role */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="rounded-2xl text-black px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
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

        <button
          className="rounded-2xl m-4 text-blue-400 bg-white w-3/5 px-4 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in"
          onClick={SignUp}
        >
          Sign Up
        </button>
      </div>
      <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
      <p className="text-white mt-4 text-sm">Already have an account?</p>
      <p
        className="text-white mb-4 text-sm font-medium cursor-pointer"
        onClick={handleLoginClick}
      >
        Sign In to your Account?
      </p>
    </div>
  );
};

export default SignUpForm;
