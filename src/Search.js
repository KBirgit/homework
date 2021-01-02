import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [city, setCity] = useState();
  let [message, setMessage] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`It is 19°C in ${city}`);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="text-center" id="search-form">
        <input
          type="search"
          onChange={updateCity}
          placeholder="Enter city here"
          className="cityForm"
          id="search-city-input"
          autoComplete="off"
        />
        <input type="submit" value="🔍" className="searchButton" />
        <input
          type="submit"
          value="📍"
          className="currentButton"
          id="current-button"
        />
      </form>
      <h3>{message}</h3>
    </div>
  );
}
