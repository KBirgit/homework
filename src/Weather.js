import React from "react";
import "./Weather.css";
import City from "./City";
import Temperature from "./Temperature";
import Timeday from "./Timeday";
import Description from "./Description";
import Weathercond from "./Weathercond";
import Search from "./Search";

export default function Weather() {
    return (
      <div className="Weather">
        <div className="container">
        <Search />
          <div className="row"></div>
          <div className="row">
            <div className="col-8">
                <Temperature />
              <div className="col p-0">
                <City />
              </div>
              <div className="col p-0">
              <Timeday />
              <Description />
              </div>
            </div>
            <div className="col-4 p-0">
            <Weathercond />
            </div>
          </div>
        </div>
      </div>
    );
  }