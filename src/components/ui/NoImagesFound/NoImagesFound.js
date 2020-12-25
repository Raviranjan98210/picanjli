import React from "react";
import noImageFoundImage from "../../../images/no_image_found.svg";
import DicoverButton from "../Buttons/DiscoverButton/DicoverButton";

const NoImagesFound = () => {
  return (
    <div
      className={`flex justify-center mt-10  w-full px-5 h-vh-70 items-center`}
    >
      <div className="inline-block  ">
        <div className="w-full flex  justify-center">
          <img
            src={noImageFoundImage}
            className="md:w-1/3 w-full mb-12 "
            alt=""
          />
        </div>

        <p className="text-center text-gray-600 mb-1">
          We have 1 bad news and 1 good news
        </p>
        <p className="text-center text-gray-600 mb-1">
          Bad news is We didn't find image you are looking for
        </p>
        <p className="text-center mb-8 text-gray-600">
          Good news is You can Discover more Images by one click
        </p>
        <DicoverButton textColor="white" gradient={true} />
      </div>
    </div>
  );
};

export default NoImagesFound;
