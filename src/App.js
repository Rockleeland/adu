/* global fetch */
import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("...loading");

  useEffect(() => {
    async function fetchData() {
      try {
        let data = await (await fetch("/api")).json();
        setMessage(data.message);
      } catch (err) {
        setMessage(err.message);
      }
    }
    fetchData();
  });

  const submit = async data => {
    await fetch("/adu", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstParam: "yourValue",
        secondParam: "yourOtherValue"
      })
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{message}</p>
        <p>Change me!</p>
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <button onClick={submit}>Click me</button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
