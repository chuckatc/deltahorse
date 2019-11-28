import React from "react";
import { Link } from "@reach/router";

const Header = () => {
  const testAddUrl = `add/Test/${encodeURIComponent(
    "https://www.justwatch.com/au/movie/stardust"
  )}/${encodeURIComponent(["Netflix", "Stan"].join("\t"))}`;
  return (
    <header>
      <h1>
        <span role="img" aria-label="horse and unicorn logo">
          🐴🦄
        </span>
      </h1>
      <nav>
        <Link to="/">Home</Link> <Link to="watchlist">Watchlist</Link>{" "}
        <Link to={testAddUrl}>TestAdd</Link>
      </nav>
    </header>
  );
};

export default Header;
