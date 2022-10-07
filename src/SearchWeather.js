import React, { useState } from "react";
import "./App.css";
import Overview from "./Overview";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function SearchWeather(props) {
  let [city, setCity] = useState(props.defaultCity);
  let [weather, setWeather] = useState({ ready: false });

  function showResponse(response) {
    setWeather({
      ready: true,
      coordinates: response.data.coord,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  function submitSearch() {
    let apiKey = "d2c2ea35d1cdabb51672d9219b227afa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    submitSearch();
  }

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  /*function searchCurrentLocation(position) {
    let apiKey = "d2c2ea35d1cdabb51672d9219b227afa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchCurrentLocation);
  }*/

  if (weather.ready) {
    return (
      <div>
        <div className="SearchWeather">
          <form id="search-form" class="mb-3" onSubmit={handleSubmit}>
            <div class="row">
              <div class="col-9">
                <input
                  type="search"
                  placeholder="Enter a city"
                  defaultValue={props.defaultKeyword}
                  class="form-control"
                  id="city-input"
                  autocomplete="off"
                  onChange={updateCity}
                />
              </div>
              <div class="col-3">
                <input type="submit" value="Search" class="btn w-100" />
              </div>
            </div>
          </form>
        </div>
        <Overview data={weather} />
        <CurrentWeather data={weather} />

        <WeatherForecast coordinates={weather.coordinates} />
      </div>
    );
  } else {
    submitSearch();
    return "Loading...";
  }
}
