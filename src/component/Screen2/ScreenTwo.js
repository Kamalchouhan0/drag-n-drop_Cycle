import react, { useState } from "react";
import "./ScreenTwo.css";
import biCycle from "../../bicycle.svg";

import seat from "../../image/seat.png";
import body from "../../image/body.png";
import wheel from "../../image/wheel.png";
import handle from "../../image/handle.png";
import pedal from "../../image/pedal.png";
import { Link } from "react-router-dom";
import { rangeStoreVal } from "../data";

function ScreenTwo() {
  const [isbody, setBody] = useState(false);
  const [isseat, setseat] = useState(false);
  const [iswheel, setwheel] = useState(false);
  const [ispedal, setpedal] = useState(false);
  const [ishandle, sethandle] = useState(false);

  const handleSwitch = (comp) => {
    console.log(comp);
    switch (comp) {
      case "seat": {
        if (isseat) {
          rangeStoreVal["isSeat"].isChecked = false;

          setseat(false);
        } else {
          sessionStorage.setItem("data", { isseat: isseat });
          rangeStoreVal["isSeat"].isChecked = true;

          setseat(true);
        }
        break;
      }

      case "body": {
        if (isbody) {
          rangeStoreVal["isbody"].isChecked = false;

          setBody(false);
        } else {
          rangeStoreVal["isbody"].isChecked = true;

          setBody(true);
        }
        break;
      }

      case "handle": {
        if (ishandle) {
          rangeStoreVal["ishandle"].isChecked = false;

          sethandle(false);
        } else {
          rangeStoreVal["ishandle"].isChecked = true;
          sethandle(true);
        }
        break;
      }

      case "wheel": {
        if (iswheel) {
          rangeStoreVal["iswheel"].isChecked = false;

          setwheel(false);
        } else {
          rangeStoreVal["iswheel"].isChecked = true;

          setwheel(true);
        }
        break;
      }

      case "pedal": {
        if (ispedal) {
          rangeStoreVal["ispedal"].isChecked = false;

          setpedal(false);
        } else {
          rangeStoreVal["ispedal"].isChecked = true;

          setpedal(true);
        }
        break;
      }
    }
  };

  console.log("file data ", rangeStoreVal);

  return (
    <div className="ScreenTwo">
      <div className="ScreenTwo-title">Select Cycle Parts</div>
      <div className="ScreenTwo-list">
        <div
          className={isseat ? "isActiveSeat" : "notActiveSeat"}
          style={{ height: "80%", width: "70%", position: "relative" }}
          onClick={() => handleSwitch("seat")}
        >
          {" "}
          <img
            src={seat}
            style={{ height: "70%", width: "70%", alignItems: "center" }}
          ></img>
          <h3 style={{ position: "absolute", bottom: "-10px", left: "30%" }}>
            SEAT
          </h3>
        </div>

        <div
          className={iswheel ? "isActiveSeat" : "notActiveSeat"}
          style={{ height: "80%", width: "70%", position: "relative" }}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={wheel}
            onClick={() => handleSwitch("wheel")}
          ></img>{" "}
          <h3 style={{ position: "absolute", bottom: "-10px", left: "30%" }}>
            WHEEL
          </h3>
        </div>

        <div
          className={ishandle ? "isActiveSeat" : "notActiveSeat"}
          style={{ height: "80%", width: "70%", position: "relative" }}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={handle}
            onClick={() => handleSwitch("handle")}
          ></img>
          <h3 style={{ position: "absolute", bottom: "-10px", left: "30%" }}>
            HANDLE
          </h3>
        </div>

        <div
          className={isbody ? "isActiveSeat" : "notActiveSeat"}
          style={{ height: "80%", width: "70%", position: "relative" }}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={body}
            onClick={() => handleSwitch("body")}
          ></img>
          <h3 style={{ position: "absolute", bottom: "-10px", left: "30%" }}>
            BODY
          </h3>
        </div>

        <div
          style={{ height: "80%", width: "70%", position: "relative" }}
          className={ispedal ? "isActiveSeat" : "notActiveSeat"}
        >
          {" "}
          <img
            style={{ height: "70%", width: "70%" }}
            src={pedal}
            onClick={() => handleSwitch("pedal")}
          ></img>
          <h3 style={{ position: "absolute", bottom: "-10px", left: "30%" }}>
            PEDAL
          </h3>
        </div>
      </div>
      <div className="ScrrenTwo-img">
        {" "}
        <img src={biCycle}></img>
      </div>
      <Link to="/screenThree">
        <div className="ScreenTwo-btn">
          {" "}
          <center>Next</center>
        </div>
      </Link>
    </div>
  );
}

export default ScreenTwo;
