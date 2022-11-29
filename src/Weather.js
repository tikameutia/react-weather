import React from "react";
import SearchEngine from "./SearchEngine";

import "./Weather.css";

export default function Weather() {
  let currently = {
    time: "16:13",
    day: "Tue",
    date: "29 Nov",
  };

  return (
    <div className="Weather">
      <div className="container">
        <h1>{currently.time}</h1>
        <h3>
          {currently.day}, {currently.date}
        </h3>
        <SearchEngine />
        <br />
        <code>
          <a
            href="https://github.com/tikameutia/react-weather"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourced code
          </a>{" "}
          by Tika
        </code>
      </div>
    </div>
  );
}
