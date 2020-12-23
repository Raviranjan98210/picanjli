import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/Home";
import ImageDetailAndDownload from "./pages/DetailAndDownload/DetailAndDownload";
import Header from "./components/app/Navbar/Navbar";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/images/search/:searchTerm">
          <Search />
        </Route>
        <Route path="/images/:imageId">
          <ImageDetailAndDownload />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
