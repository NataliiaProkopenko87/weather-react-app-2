import React from "react";
import Icon from "./Icon";
import "./App.css";

export default function DayWeatherForecast(props) {
  function ForecastMaxTemp() {
    let MaxTemp = Math.ceil(props.data.temp.max);
    return `${MaxTemp}°`;
  }

  function ForecastMinTemp() {
    let MinTemp = Math.floor(props.data.temp.min);
    return `${MinTemp}°`;
  }

  function ForecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div class="weather-forecast-date">{ForecastDay()}</div>
      <Icon code={props.data.weather[0].icon} size={50} />
      <div class="weather-forecast-temperatures">
        <span class="weather-forecast-temperature-max">
          {ForecastMaxTemp()}
        </span>
        <span class="weather-forecast-temperature-min">
          {ForecastMinTemp()}
        </span>
      </div>
    </div>
  );
}
