import React from "react";
import GetAppIcon from "@material-ui/icons/GetApp";
import classes from "./DownloadButtons.module.css";

const Download = ({ color, text, width, textColor, downloadImage }) => {
  return (
    <>
      <button
        className={`bg-${color} bg-gradient-to-r ${classes.downloadBtn} from-gradientAccentPrimary to-gradientAccentSecondary  px-10 py-3 ${width} text-${textColor} rounded-full focus:outline-none border-none font-bold transition-all duration-500 
        transform hover:-translate-y-1 active:translate-y-1
        
        `}
        onClick={() => downloadImage()}
      >
        <GetAppIcon />
        <span className={`text-sm`}>{text}</span>
      </button>
    </>
  );
};

export default Download;
