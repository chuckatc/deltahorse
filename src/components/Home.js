import React from "react";

// Reference: https://exploringjs.com/impatient-js/ch_sets.html#missing-set-operations
const arrayIntersection = (arrayA, arrayB) => {
  const a = new Set(arrayA);
  const b = new Set(arrayB);
  const intersection = new Set([...a].filter(x => b.has(x)));
  return Array.from(intersection);
};

const activeServices = services => services.filter(service => service.active);

const serviceNames = services => services.map(service => service.name);

const totalCostOfServices = services =>
  services.reduce((total, service) => (total += service.monthlyCost), 0);

const Home = ({ state, dispatch }) => {
  const activeServiceNames = serviceNames(activeServices(state.services));
  console.log(arrayIntersection(activeServiceNames, ["Netflix"]).length);
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
            {service.name} (${(service.monthlyCost / 100).toFixed(2)})
          </label>
        ))}
      </ul>
      <h2>Total Montly Cost</h2>$
      {(totalCostOfServices(activeServices(state.services)) / 100).toFixed(2)}
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
