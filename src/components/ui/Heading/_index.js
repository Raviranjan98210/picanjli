import React from "react";
import classes from "./Heading.module.css";
const Heading = ({ text }) => {
  return (
    <div>
      <h1
        className={`text-left md:text-2xl text-xl mb-10 text-gray-900  font-medium md:mb-12 `}
      >
        {text}
      </h1>
    </div>
  );
};

export default Heading;
