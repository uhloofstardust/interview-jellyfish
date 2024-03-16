import React, { useState } from "react";
import { Facebook, GitHub, Google } from "@mui/icons-material";
import { getDatabase, ref, child, onValue, get } from "firebase/database";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { app } from "../firebase/firebase";
import "./Login.css";
import Button2 from "../../components/Button2";
import JellyLogo from "../../components/JellyLogo";

const auth = getAuth(app);

const LoginForm = ({ isLogin, setLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  const getUser = async (id) => {
    // try {

    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${id}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          if (snapshot.val().role === "Candidate") {
            navigate(`/${id}/candidates`);
          } else {
            navigate(`/${id}/interviewer`);
          }
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    //   const db = getDatabase();
    //   const usersRef = ref(db, 'users/'+id);
    //   const snapshot = await get(child(usersRef, auth.currentUser.uid));
    //   if (snapshot.exists()) {
    //     console.log(snapshot.val());
    //     return snapshot.val();
    //   } else {
    //     console.log("No data available");
    //     return null;
    //   }
    // } catch (error) {
    //   console.error("Error fetching user data:", error);
    //   return null;
    // }
  };

  const loginUser = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User is Logged In: ", user.uid);

      await getUser(user.uid);
    } catch (error) {
      console.error("Login Error:", error.message);
    }
  };

  return (
    <>
    
    <div className="login-box">
    <div className="logo">
        <JellyLogo />
    </div>
      <h2 className="login-heading">Log in</h2>
      <div className="flex flex-col items-center justify-center">
        <input
          type="email"
          className="text-input input"
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
        <div className="login-btn">
          <Button2 textContent={"Log in"} action={loginUser} />
        </div>
        
      </div>

      <div className="no-account-action">
        <Link to={"/signup"}>Don't have an account? Click here</Link>
      </div>

      <div className="no-account-action">
        <Link to={"/"}>go back</Link>
      </div>

    </div>
  </>
  );
};

export default LoginForm;
