import React from "react";

import {
  serviceNames,
  activeServices,
  formatCentsToDollars,
  totalCostOfServices,
  arrayIntersection
} from "../utils";

const Home = ({ state, dispatch }) => {
  const activeServiceNames = serviceNames(activeServices(state.services));
  return (
    <div>
      <h2>Services</h2>
      <ul>
        {state.services.map((service, i) => (
          <label key={i} htmlFor={i}>
            <input
              id={i}
              type="checkbox"
              checked={service.active}
              onChange={() =>
                dispatch({
                  type: "TOGGLE_SERVICE_ACTIVE",
                  payload: service.name
                })
              }
            />
            {service.name} (${formatCentsToDollars(service.monthlyCost)})
          </label>
        ))}
      </ul>
      <h2>Total Montly Cost</h2>$
      {formatCentsToDollars(
        totalCostOfServices(activeServices(state.services))
      )}
      <h2>Watchlist Titles Available</h2>
      <ul>
        {state.watchlist.map((item, i) => {
          return arrayIntersection(item.services, activeServiceNames).length ? (
            <li key={i}>
              <button
                onClick={() =>
                  dispatch({
                    type: "DELETE_TITLE",
                    payload: { title: item.title }
                  })
                }
              >
                X
              </button>
              <a href={item.url}>{item.title}</a> - {item.services.join(", ")}
            </li>
          ) : null;
        })}
      </ul>
    </div>
  );
};

export default Home;
