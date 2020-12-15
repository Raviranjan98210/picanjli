import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import ImageDetailAndDownload from "./components/ImageDetailAndDownload";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/images/:imageId">
            <ImageDetailAndDownload />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
