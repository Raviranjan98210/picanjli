import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./assets/output.css"; // Including tailwind css

import reducer, { initialState } from "./context/reducer";
import { Provider } from "./context/GlobalState";

ReactDOM.render(
  <Provider initialState={initialState} reducer={reducer}>
    <App />
  </Provider>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
