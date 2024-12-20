import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Comet429"
            target="_blank"
            rel="noreferrer"
          >
            Jessie Polong
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Comet429/react-panahon-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
