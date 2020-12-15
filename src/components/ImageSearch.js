import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };
  return (
    <div className="max-w-xs md:max-w-sm rounded overflow-hidden my-10 mx-auto ">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center  border-b-2 border-teal-500 py-2">
          <input
            onChange={(e) => setText(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />
          <IconButton
            className=" bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-primary  px-2 rounded"
            type="submit"
          >
            <SearchOutlinedIcon color="primary" />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
