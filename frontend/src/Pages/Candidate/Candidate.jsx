import React, { useState } from "react";
import Button2 from "../../components/Button2";
import JellyLogo from "../../components/JellyLogo";
import { getDatabase, ref, set } from "firebase/database";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { Link } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase';
import "./Candidate.css";

const auth = getAuth(app);
const database = getDatabase(app);
const storage = getStorage(app); // Initialize storage

const Candidate = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [resumeFile, setResumeFile] = useState(null); // Change resume state to file object
    const [skills, setSkills] = useState("");
    const [education, setEducation] = useState("");
    const [additionalInfo, setAdditionalInfo] = useState("");
    const [resumeDownloadURL, setResumeDownloadURL] = useState(""); 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (resumeFile) {
             
                const storageRef1 = await storageRef(storage, `resumes/${resumeFile.name}`);
                console.log(storageRef1)
                await uploadBytes(storageRef1, resumeFile);
                const downloadURL = await getDownloadURL(storageRef1);
                setResumeDownloadURL(downloadURL);
            }
        
            const writeUserData = async () => {
                try {
                    const newUserRef = ref(database, 'Skilled_Candidate/'); 
                    await set(newUserRef, {
                        fullName: fullName,
                        email: email,
                        phoneNumber: phoneNumber,
                        resume: resumeDownloadURL, // Save resume download URL instead of file object
                        skills: skills,
                        education: education,
                        additionalInfo: additionalInfo,
                    });
                } catch (error) {
                    console.error(error.code, error.message);
                    alert(error.message);
                }
            };
            
            await writeUserData();

            const formData = {
                fullName,
                email,
                phoneNumber,
                resume: resumeDownloadURL,
                skills,
                education,
                additionalInfo,
            };
            console.log("Form submitted:", formData);

            setFullName("");
            setEmail("");
            setPhoneNumber("");
            setResumeFile(null);
            setSkills("");
            setEducation("");
            setAdditionalInfo("");

            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("An error occurred. Please try again later.");
        }
    };

    return (
        <div className="candidate-container">
            <div className="logo">
                <JellyLogo />
            </div>
            <h2 className="candidate-heading">Welcome</h2>
            <form onSubmit={handleSubmit} className="candidate-form">
                <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full Name"
                    className="input-field"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="input-field"
                />
                <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Phone Number"
                    className="input-field"
                />
                <input
                    type="file" // Change input type to file for resume
                    onChange={(e) => setResumeFile(e.target.files[0])} // Set resume file object
                    className="input-field"
                />
                <input
                    type="text"
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                    placeholder="Skills"
                    className="input-field"
                />
                <input
                    type="text"
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                    placeholder="Education"
                    className="input-field"
                />
                <textarea
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    placeholder="Additional Information"
                    className="input-field"
                    required
                />
                <button type="submit">Submit</button>
                {/* <Button2 textContent="Submit" type="submit" /> */}
            </form>
        </div>
    );
};

export default Candidate;
