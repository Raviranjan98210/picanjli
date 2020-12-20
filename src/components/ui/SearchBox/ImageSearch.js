import React, { useState } from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import classes from "./ImageSearch.module.css";
const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-center  ">
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="w-1/2  md:w-full ml-20 md:-ml-20 mt-1 md:-mt-1 md:h-10 h-9 text-sm md:text-lg text-gray-700 pl-4 md:pl-5 rounded-l-3xl border-none focus:outline-none "
          placeholder="Search..."
        />
        <button
          type="submit"
          className="md:h-10 bg-white h-9 mt-1 md:-mt-1 px-2 md:px-5 border-none transition-all duration-500  rounded-r-3xl  focus:outline-none hover:text-white hover:bg-secondary"
        >
          <SearchOutlinedIcon />
        </button>
      </div>
    </form>
  );
};

export default ImageSearch;
