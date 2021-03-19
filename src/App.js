import React from 'react';
import { useSelector } from "react-redux";
import Homepage from "./components/Homepage";
import Blogs from "./components/Blogs";
import Navbar from "./components/Navbar";
import { selectSignedIn } from "./features/userSlice";
import './App.css';
import "./styling/app.css";


function App() {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="app">
      <Navbar />
    <Homepage />
      {isSignedIn && <Blogs />}
    </div>
  );
};

export default App;


