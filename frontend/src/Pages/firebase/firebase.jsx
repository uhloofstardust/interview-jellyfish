// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoTmSh8nEDElvPOoohiGsuNOKMruo3Cd0",
  authDomain: "interview-cb813.firebaseapp.com",
  projectId: "interview-cb813",
  storageBucket: "interview-cb813.appspot.com",
  messagingSenderId: "33767625764",
  appId: "1:33767625764:web:6f6e02a011f159004ff4b1",
  measurementId: "G-6L5MBRZZ5N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);