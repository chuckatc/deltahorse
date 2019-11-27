import React, { useEffect } from "react";
import { navigate } from "@reach/router";

const Add = ({ title, url, services, dispatch, writeError }) => {
  // Use setTimeout(..., 0) to Work around race condition where state isn't
  // updated when an add URL is launched from scratch
  useEffect(() => {
    const action = {
      type: "UPDATE_TITLE",
      payload: { ...{ title, url }, services: services.split("\t") }
    };
    setTimeout(() => {
      dispatch(action);
      navigate("/watchlist");
    }, 0);
  }, [title, url, services, dispatch]);

  return (
    <div>
      {writeError && (
        <pre>Cannot write to localStorage: {writeError.message}</pre>
      )}
    </div>
  );
};

export default Add;
