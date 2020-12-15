import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from "@material-ui/icons/Star";

import api from "../api/index";
import DownloadButton from "./universal/Button/DownloadButton";
import download from "../utilities/imageDownload";

const ImageDetailAndDownload = () => {
  const { imageId } = useParams();
  const [image, setImage] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.getImage(imageId);

      setImage(response.data.hits);
    })();
  }, [imageId]);

  return (
    <div className="grid grid-cols-1  md:grid-cols-4 py-10 md:gap-5 md:px-10 bg-gray-50">
      <div className="col-span-3 md:relative md:pb-3/5  bg-yellow-400">
        {image.map((img) => (
          <img
            className="object-cover md:absolute w-full h-full"
            src={img.largeImageURL ? img.largeImageURL : img.user}
            alt={img.user}
          />
        ))}
      </div>

      {image.map((img) => (
        <div className="w-full col-span-1 ">
          <div className="grid grid-cols-2  justify-center shadow-lg bg-indigo-400 h-1/2 my-12 pb-1/2 ">
            <img
              src={img.userImageURL}
              alt={img.user}
              className="rounded-full h-24 w-24 col-span-2 justify-self-center transform -translate-y-10 -mt-4 border-8 border-white"
            />
            <h1 className="col-span-2 justify-self-center text-white uppercase text-2xl font-bold tracking-wide font-mono">
              {img.user}
            </h1>
            <div className="pl-4 pt-10  text-white ">
              <GetAppIcon />
              <strong className="mr-1 text-sm tracking-wide">Dowloads:</strong>
              <strong className="text-sm"> {img.downloads}</strong>
            </div>
            <div className="pl-4 pt-10 text-white">
              <FavoriteIcon className="mr-1" />
              <strong className="mr-1 text-sm tracking-wide">Likes:</strong>
              <strong className="text-sm">{img.likes}</strong>
            </div>

            <div className="pl-4 pt-9 text-white">
              <VisibilityIcon className="mr-1" />
              <strong className="mr-1 text-sm tracking-wide">Views:</strong>
              <strong className="text-sm">{img.views}</strong>
            </div>

            <div className="pl-4 pt-9 text-white">
              <StarIcon className="mr-1" />
              <strong className="mr-1 text-sm tracking-wide">Favorites:</strong>
              <strong className="text-sm">{img.favorites}</strong>
            </div>
          </div>

          <DownloadButton
            text="Download Free"
            color="accent"
            width="w-full"
            textColor="white"
            borderRadius="100px"
            downloadImage={() => download(img.largeImageURL)}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageDetailAndDownload;
