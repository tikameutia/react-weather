import React from "react";
import SearchEngine from "./SearchEngine";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "Amsterdam",
    time: "09:26",
    day: "Thu",
    date: "24 Nov",
    humidity: 96,
    wind: 7,
    description: "Scattered Clouds",
    temperature: 9,
  };

  return (
    <div className="Weather">
      <div className="container">
        <SearchEngine />
        <form className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control"
            placeholder="Type city name"
            autoFocus="on"
            autoComplete="off"
          />

          <button type="submit" className="btn btn-primary mb-3">
            Search
          </button>
        </form>
        <div className="row">
          <div className="col">
            <h1>{weatherData.time}</h1>
            <h3>
              {weatherData.day}, {weatherData.date}
            </h3>
            <ul>
              <li>Humidity {weatherData.humidity}%</li>
              <li>Wind speed {weatherData.wind} km/h</li>
              <li>{weatherData.description}</li>
            </ul>
          </div>
          <div className="col text-right">
            <h1>{weatherData.city}</h1>
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-4">
            <span>TODAY</span>
            <div className="row">
              <div className="col-sm-6">
                <img src="" alt="" width="120" />
              </div>
              <div className="col-sm-6">{weatherData.temperature}°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
