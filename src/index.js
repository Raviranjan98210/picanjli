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
