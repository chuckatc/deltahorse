import React from "react";
import { Router } from "@reach/router";
import Header from "./Header";
import Home from "./Home";
import WatchList from "./WatchList";
import Add from "./Add";

import { useLocalStorageReducer } from "react-storage-hooks";

const initialState = {
  services: [
    {
      name: "Amazon Prime Video",
      monthlyCost: 699,
      subscribed: true,
      active: true
    },
    {
      name: "Disney Plus",
      monthlyCost: 899,
      subscribed: true,
      active: true
    },
    {
      name: "Foxtel Now",
      monthlyCost: 5500,
      subscribed: true,
      active: true
    },
    {
      name: "Apple TV Plus",
      monthlyCost: 799,
      subscribed: true,
      active: true
    },
    {
      name: "Netflix",
      monthlyCost: 999,
      subscribed: true,
      active: true
    },
    {
      name: "Stan",
      monthlyCost: 1000,
      subscribed: true,
      active: true
    }
  ],
  watchlist: [
    {
      title: "The X-Files (1993)",
      url: "https://www.justwatch.com/au/tv-show/the-x-files",
      services: ["SBS On Demand", "Foxtel Now"]
    },
    {
      title: "The Flash (2014)",
      url: "https://www.justwatch.com/au/tv-show/the-flash",
      services: ["Stan", "Foxtel Now", "tenplay"]
    },
    {
      title: "Stardust (2007)",
      url: "https://www.justwatch.com/au/movie/stardust",
      services: ["Foxtel Now", "Amazon Prime Video", "SBS On Demand"]
    },
    {
      title: "Rick and Morty (2013)",
      url: "https://www.justwatch.com/au/tv-show/rick-and-morty",
      services: ["Netflix"]
    },
    {
      title: "The Mandalorian (2019)",
      url: "https://www.justwatch.com/au/tv-show/the-mandalorian",
      services: ["Disney Plus", "Disney Plus"]
    },
    {
      title: "See (2019)",
      url: "https://www.justwatch.com/au/tv-show/see",
      services: ["Apple TV Plus"]
    }
  ]
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TITLE":
      if (!action.payload.title) return state;
      return {
        ...state,
        watchlist: [
          ...state.watchlist.filter(
            item => item.title !== action.payload.title
          ),
          { ...action.payload }
        ]
      };
    case "DELETE_TITLE":
      return {
        ...state,
        watchlist: [
          ...state.watchlist.filter(item => item.title !== action.payload.title)
        ]
      };
    case "TOGGLE_SERVICE_ACTIVE":
      return {
        ...state,
        services: [
          ...state.services.map(service =>
            service.name === action.payload
              ? { ...service, active: !service.active }
              : service
          )
        ]
      };
    default:
      return state;
  }
};

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
