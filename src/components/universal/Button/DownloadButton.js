import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import "./DownloadButtons.css";

const Download = ({ color, text, width, textColor, downloadImage }) => {
  return (
    <>
      <button
        className={`bg-${color} px-10 py-4 ${width} text-${textColor} rounded-full focus:outline-none border-none font-bold transition-all duration-500 
        transform hover:-translate-y-1 active:translate-y-1
        
        `}
        onClick={() => downloadImage()}
      >
        <GetAppIcon /> {text}
      </button>
    </>
  );
};

export default Download;
