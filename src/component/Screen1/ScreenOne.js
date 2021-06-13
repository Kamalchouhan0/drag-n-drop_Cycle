import React from "react";
import biCycle from "../../bicycle.svg";
import "./index.css";
import { Link } from "react-router-dom";

function ScreenOne() {
  return (
    <div className="ScreenOne-main">
      <h1 className="ScreenOne-title">Screen 1 </h1>
      <img className="ScreenOne-img" src={biCycle} />
      <Link to="/screenTwo">
        <div className="ScreenOne-btn">
          <center>Start</center>
        </div>
      </Link>
    </div>
  );
}

export default ScreenOne;
