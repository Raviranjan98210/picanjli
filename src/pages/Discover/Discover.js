import React from "react";
import DiscoverElement from "./DiscoverElement";
import { categories, orientation, colors } from "./DiscoverSections";

const Discover = () => {
  return (
    <div className="mb-10 mt-10">
      <DiscoverElement heading="Category" sections={categories} />
      <DiscoverElement heading="Orientation" sections={orientation} />
      <DiscoverElement heading="Colors" sections={colors} />
    </div>
  );
};

export default Discover;
