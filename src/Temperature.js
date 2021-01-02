import React from "react";
import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <h1>
        <img src={require("./images/01d.png")} alt="sun" />
        -2°C
        <span className="units">
          <a href="#" id="scale">
            /°F
          </a>
        </span>
      </h1>
    </div>
  );
}
