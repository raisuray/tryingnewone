import React, { useState } from "react";
import "./authentication.css";
import { getAuth, createUserWithEmailAndPassword, signOut } from "firebase/auth";



function SignUp() {
  const [user, setUser] = useState(undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signIn(email, password) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log("Sign up success!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
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
        <h1 className="title">Sign Up</h1>
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
                Sign Up
              </p>
            )}

            {user !== undefined && (
              <p
                className="loginbutton"
                onClick={() => mySignOut()}
              >
                Sign Out
              </p>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
