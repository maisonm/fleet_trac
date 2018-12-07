import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Home from "./layouts/Homepage/Home";
import Dashboard from "./layouts/Dashboard/Dashboard";

ReactDOM.render(
  <Router>
    <App>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
    </App>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
