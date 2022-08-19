import React from "react";
import "./App.css";
import FormatDate from "./FormatDate";

export default function Overview(props) {
  return (
    <div className="Overview">
      <h1 id="city">{props.data.city}</h1>
      <ul>
        <FormatDate />
        <li id="description">{props.data.description}</li>
      </ul>
    </div>
  );
}
