import React from "react";
import classe from "./DiscoverElement.module.css";
import classes from "./DiscoverElement.module.css";
import { useHistory } from "react-router-dom";
const Discover = ({ heading, sections }) => {
  const history = useHistory();
  return (
    <div>
      <h1 className="md:px-10 px-5 mt-10 text-gray-700 font-regular text-2xl">
        {heading}
      </h1>
      <div
        className={`grid grid-cols-2 md:grid-cols-8 gap-4 px-5 md:px-10 mt-10`}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex justify-center  items-center  w-full h-28 rounded-lg ${classes.discoverImg}   cursor-pointer relative overflow-hidden`}
            onClick={() =>
              history.push(`/images/discover/${section.type}/${section.term}`)
            }
          >
            <img
              src={section.imgSrc}
              alt=""
              className={`h-full w-full absolute top-0 object-cover rounded-lg `}
            />
            <div
              className={`w-full absolute top-0 flex justify-center items-center h-full  ${classes.discoverContainer}`}
            >
              <p className={` text-white left-12`}>{section.textOnImage}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Discover;
