import React from "react";
import "./App.css";

export default function FormatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let date = new Date();

  let day = days[date.getDay()];

  let hours = date.getHours();

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <div className="FormatDate">
      <li>
        Last updated:{" "}
        <span id="date">
          {day} {hours}:{minutes}
        </span>
      </li>
    </div>
  );
}
