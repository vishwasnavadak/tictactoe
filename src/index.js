import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./index.css";

import HomePage from "./HomePage";
import Game2 from "./Game2";
import Game3 from "./Game3";
import Game4 from "./Game4";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={HomePage} />
      <Route path="/2x2" component={Game2} />
      <Route path="/3x3" component={Game3} />
      <Route path="/4x4" component={Game4} />
    </div>
  </Router>,
  document.getElementById("root")
);
