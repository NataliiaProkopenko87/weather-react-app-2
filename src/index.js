import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import SearchWeather from "./SearchWeather";

function App() {
  return (
    <div className="container">
      <div className="WeatherAppWrapper">
        <div className="WeatherApp">
          <SearchWeather defaultCity="New York" defaultKeyword="New York"/>
        </div>
        <footer>
          <small>
            Open-sourse code on{" "}
            <a
              href="https://github.com/NataliiaProkopenko87/weather-react-app-2"
              target="_blank"
              rel="noreferrer"
            >
              GitHub{" "}
            </a>
            , created by{" "}
            <a
              href="https://tiny-semolina-5cec1e.netlify.app/"
              targer="_blank"
              rel="noreferrer"
            >
              Nataliia Prokopenko
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
