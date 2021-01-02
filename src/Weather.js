import React from "react";
import "./Weather.css";
import City from "./City";
import Temperature from "./Temperature";

export default function Weather() {
    return (
      <div className="Weather">
        <div className="container">
          <div className="row"></div>
          <div className="row">
            <div className="col-8">
                <Temperature />
              <div className="col p-0">
                <City />
              </div>
              <div className="col p-0">
              </div>
            </div>
            <div className="col-4 p-0">
            </div>
          </div>
        </div>
      </div>
    );
  }