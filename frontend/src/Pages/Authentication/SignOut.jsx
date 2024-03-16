import React from "react";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
const SignOut = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
  return <div>SignOut</div>;
};

export default SignOut;
