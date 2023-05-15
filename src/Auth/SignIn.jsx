import React, { useState } from "react";
import "./authentication.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  SignInMethod,
} from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyAC1fjxKrCpeq0G95Qe1zO6Lni2Jwln2lQ",
  authDomain: "krosant.firebaseapp.com",
  projectId: "krosant",
  storageBucket: "krosant.appspot.com",
  messagingSenderId: "1037336862018",
  appId: "1:1037336862018:web:b5feb500b9f0a6f1c33cdb",
  measurementId: "G-6RK1PNXXCB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function SignIn() {
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate(); 


  function signIn(email, password) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log("signin success!");
        navigate(`/`);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  function mySignOut() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser(undefined);
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  }

  console.log(email, password);

  return (
    <div className="modal-container">
      <div className="modal">
        <h1 className="title">Sign In</h1>
        <div className="box">
          <label>Email</label>
          <input
            className="input-box"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="box">
          <label>Password</label>
          <input
            type="password"
            className="input-box"
            onChange={(e) => setPassword(e.target.value)}
            maxLength={12}
          />
        </div>
        <div className="box">
          <button>
            {user === undefined && (
              <p
                className="loginbutton"
                onClick={() => signIn(email, password)}
              >
                Sign In
              </p>
            )}

            {user !== undefined && (
              <p className="loginbutton" onClick={() => mySignOut()}>
                Sign Out
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
