import React from "react";
import classes from "./HeroImage.module.css";
import DiscoverButton from "../Buttons/DiscoverButton/DicoverButton";
const HeroImage = () => {
  return (
    <section className={`h-vh-70  ${classes.hero_image}`}>
      <div className={`${classes.hero_content} text-white`}>
        <h1 className="text-center text-4xl md:text-5xl  mb-4 font-semibold">
          Picanjli
        </h1>
        <h1 className=" text-3xl text-center font-regular mb-4">
          We offers stunning high quality images for free
        </h1>
        <p className="md:text-sm text-xs text-center mb-10">
          Over 1.5 millions+ high quality stock images shared by our talented
          community.
        </p>
        <DiscoverButton gradient={false} textColor="gray-800" />
      </div>
    </section>
  );
};

export default HeroImage;
