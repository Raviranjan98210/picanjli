import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/index";
import ImageDetailAndDownload from "./components/ImageDetailAndDownload";
import Header from "./components/app/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Header />
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
