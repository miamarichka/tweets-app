/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="/tweets-app">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
