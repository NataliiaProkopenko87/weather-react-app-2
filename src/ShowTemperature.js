import React, { useState } from "react";

import "./App.css";

export default function ShowTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheitTemp() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      
      <span>
        <strong id="temperature">{Math.round(props.celsius)}</strong>
        <span class="unit">
          <span className="selectCelsius">℃</span>|{" "}
          <span className="clickFahrenheit" onClick={showFahrenheit}>
            ℉
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <strong id="temperature">{Math.round(fahrenheitTemp())}</strong>
        <span class="unit">
          <span className="selectFahrenheit">℉</span>|{" "}
          <span className="clickCelsius" onClick={showCelsius}>
            ℃
          </span>
        </span>
      </span>
    );
  }
}
