import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import SignUp from "./Auth/SignUp";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import SignIn from "./Auth/SignIn";
import Navbar from "./Components/Navbar";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
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

  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
      </div>
    </>
  );
}

export default App;
