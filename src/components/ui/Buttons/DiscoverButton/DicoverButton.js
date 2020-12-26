import React from "react";
import { useHistory } from "react-router-dom";

import classes from "./DiscoverButton.module.css";
const DicoverButton = ({
  width = "100%",
  color = "white",
  textColor = "gray",
  gradient, //could be true or false
}) => {
  const history = useHistory();
  return (
    <div className="text-center">
      <button
        className={`bg-${color} ${
          gradient ? classes.discoverBtnGradient : classes.discoverBtnWhite
        } px-16 py-3 ${width}  rounded-full outline-none focus:outline-none border-none font-bold transition-all duration-500 
        transform hover:-translate-y-1 active:translate-y-1 
         ${
           gradient
             ? "bg-gradient-to-r from-gradientAccentPrimary to-gradientAccentSecondary"
             : ""
         } 
        `}
        onClick={() => history.push("/images/discover/all")}
      >
        <span className={`md:text-lg text-sm text-${textColor} tracking-wider`}>
          Discover
        </span>
      </button>
    </div>
  );
};

export default DicoverButton;
