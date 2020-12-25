import React from "react";
import Heading from "../ui/Heading/_index";
import ImageMasonry from "../ui/ImageMasonry/ImageMasonry";

const ImageRelated = ({ colSpan, relatedImages }) => {
  return (
    <div className={`w-full h-full overflow-hidden col-span-${colSpan} mt-12`}>
      <Heading text="Related Images" />
      <ImageMasonry images={relatedImages} colsXs={2} colsMd={5} />
    </div>
  );
};

export default ImageRelated;
