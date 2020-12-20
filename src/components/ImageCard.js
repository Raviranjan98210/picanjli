import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import Loader from "react-loader-spinner";
import { useHistory } from "react-router-dom";

const ImageCard = ({ image }) => {
  const history = useHistory();

  if (!image) {
    return (
      <div>
        {/* <img src={not_found_image} alt="Not found image" /> */}
        <h1>Image Not </h1>
      </div>
    );
  }
  const { webformatURL, views, likes, downloads, id } = image;
  const tags = image.tags.split(",");

  return (
    <div
      className=" max-w-full md:max-w-xs  md:mx-10 md:rounded overflow-hidden shadow-lg cursor-pointer"
      onClick={(e) => {
        history.push(`/images/${image.id}`);
      }}
    >
      <LazyLoadImage
        src={webformatURL}
        alt="pixabay-image"
        className="w-full object-contain md:object-cover h-full md:h-52"
        placeholder={
          <div className="flex flex-row my-5 justify-center items-center">
            <Loader type="Bars" color="#6C63FF" height={50} width={50} />
          </div>
        }
        delayTime="300"
      ></LazyLoadImage>

      <div className="px-6 py-4">
        <ul>
          <li>
            <strong>
              <VisibilityOutlinedIcon className="mr-2 " color="primary" />
            </strong>
            <span className="flex-row items-center">{views}</span>
          </li>
          <li>
            <strong>
              <GetAppOutlinedIcon color="primary" className="mr-2" />
            </strong>
            {downloads}
          </li>
          <li>
            <strong>
              <FavoriteBorderOutlinedIcon color="primary" className="mr-2" />
            </strong>
            {likes}
          </li>
        </ul>
      </div>
      <div className="px-6 py-4">
        {tags.map((tag) => (
          <span className="inline-block bg-indigo-400  mt-2 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2">
            # {tag.trim()}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
