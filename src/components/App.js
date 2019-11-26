import React from "react";
import { Router } from "@reach/router";
import Header from "./Header";
import Home from "./Home";
import WatchList from "./WatchList";
import Add from "./Add";

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Home path="/" />
          <WatchList path="watchlist" />
          <Add path="add/:title/:url/:services" />
        </Router>
      </main>
    </div>
  );
};

export default App;
