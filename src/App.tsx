import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { css } from "./css.ts";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div
          style={css({
            width: "200px",
            height: "200px",
            backgroundColor: "green",
          })}
        >
          Should be green
        </div>
        <div
          style={css({
            width: "200px",
            height: "200px",
            backgroundColor: "green",
            light: {
              backgroundColor: "red",
            },
          })}
        >
          Should be red
        </div>
        <div
          style={css({
            width: "200px",
            height: "200px",
            light: {
              backgroundColor: "red",
            },
          })}
        >
          Should be red
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
