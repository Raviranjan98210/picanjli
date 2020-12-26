import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import ImageDetailAndDownload from "./pages/DetailAndDownload/DetailAndDownload";
import Header from "./components/app/Navbar/Navbar";
import Search from "./pages/Search/Search";
import ImageTypes from "./pages/ImageType/ImageTypes";
import Discover from "./pages/Discover/Discover";
import Orientation from "./pages/Orientation/Orientation";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/images/search/:searchTerm" exact>
          <Search />
        </Route>
        <Route path="/images/:imageId" exact>
          <ImageDetailAndDownload />
        </Route>
        <Route path="/images/types/:imageType" exact>
          <ImageTypes />
        </Route>
        <Route path="/images/discover/all" exact>
          <Discover />
        </Route>
        <Route path="/images/discover/orientation/:orientationType" exact>
          <Orientation />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
