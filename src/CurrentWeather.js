import React from "react";
import "./App.css";
import ShowTemperature from "./ShowTemperature";
import Icon from "./Icon";



export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div class="row">
        <div class="col-6">
          <div class="clearfix weather-temperature">
            <div class="float-left">
            <span>
              <Icon code={props.data.icon} size={52} />
            </span>
              <ShowTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div class="col-6">
          <ul>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
