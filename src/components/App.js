import React from "react";
import { Router } from "@reach/router";
import { useLocalStorageReducer } from "react-storage-hooks";

import Header from "./Header";
import Home from "./Home";
import WatchList from "./WatchList";
import Add from "./Add";
import initialState from "../initialState";
import reducer from "../reducer";

const App = () => {
  const [state, dispatch, writeError] = useLocalStorageReducer(
    "deltahorse-state",
    reducer,
    initialState
  );

  return (
    <div className="App">
      <Header />
      <main>
        <Router>
          <Home path="/" {...{ state, dispatch, writeError }} />
          <WatchList path="watchlist" {...{ state, dispatch, writeError }} />
          <Add path="add/:title/:url/:services" {...{ dispatch, writeError }} />
        </Router>
      </main>
    </div>
  );
};

export default App;
