import React from "react";

const Add = ({ title, url, services }) => {
  return (
    <div>
      {title}
      {url}
      <br />
      <ul>
        {services.split("\t").map((service, i) => (
          <li key={i}>{service}</li>
        ))}
      </ul>
    </div>
  );
};

export default Add;
