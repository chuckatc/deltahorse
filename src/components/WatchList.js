import React from "react";

const WatchList = ({ state, dispatch }) => {
  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {state.watchlist.map((item, i) => (
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
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
