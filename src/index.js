import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./assets/fonts/dirty.otf";
import "./assets/fonts/miama.otf";
import "./style/helpers/_variables.scss";
import "./index.scss";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
