import React from "react";

const ImageGrid = ({ images, cols }) => {
  return (
    <div className={`grid grid-cols-1 md:gap-5 md:grid-cols-${cols}`}>
      {images.map((image) => (
        <div className="bg-yellow-400 relative md:pb-3/5">
          <img
            src={image.webformatURL}
            alt=""
            className="w-full h-full absolute object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
