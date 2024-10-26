import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "097df1873e259e4a0bt116o07b264c78";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forcast-day">Wed</div>
          <WeatherIcon code="code" size={36} />
          <div className="Forecast-temperature">
            <span className="Forecast-temperature-max">20°</span>{" "}
            <span className="Forcast-temerature-min">7°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
