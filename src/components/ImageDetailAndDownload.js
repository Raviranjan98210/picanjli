import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GetAppIcon from "@material-ui/icons/GetApp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import StarIcon from "@material-ui/icons/Star";

import api from "../api/index";
import DownloadButton from "./ui/Buttons/DownloadButton/_index";
import download from "../utilities/imageDownload";
import ImageRelated from "./ImageDetail/ImageRelated";
import Avatar from "@material-ui/core/Avatar";

const ImageDetailAndDownload = () => {
  const { imageId } = useParams();
  const [image, setImage] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);

  useEffect(() => {
    (async () => {
      const responseImage = await api.getImage(imageId);
      const responesImages = await api.getImages("", 1, 15);

      setImage(responseImage.data.hits);
      setRelatedImages(responesImages.data.hits);
    })();
  }, [imageId]);

  return (
    <div className="grid grid-cols-1  md:grid-cols-4 py-10 md:gap-5 px-5 md:px-10 bg-gray-50">
      <div className="col-span-4 md:col-span-3 md:relative md:pb-8/12  bg-gray-200 rounded-3xl ">
        {image.map((img) => (
          <img
            className="object-scale-down md:absolute w-full h-full md:rounded-3xl"
            src={img.largeImageURL ? img.largeImageURL : img.user}
            alt={img.user}
          />
        ))}
      </div>

      {image?.map((img) => (
        <div className="w-full col-span-4 md:col-span-1 ">
          <div className="md:grid hidden grid-cols-2   justify-center rounded-3xl shadow-lg bg-indigo-400 bg-gradient-to-r from-gradientPrimary to-gradientSecondary h-1/2 my-12 pb-12 ">
            <div
              style={{ width: "100px", height: "110px" }}
              className="border-b-4 h-10/12  rounded-full  col-span-2  justify-self-center transform -translate-y-14  border-white uppercase text-white font-bold"
            >
              <Avatar
                src={img.userImageURL}
                alt={img.user}
                style={{
                  width: "100px",
                  height: "100px",
                }}
              >
                {img.user.charAt(0)}
              </Avatar>
            </div>

            <h1 className="col-span-2 -mt-10 justify-self-center  text-white uppercase text-2xl font-bold tracking-wide font-mono">
              {img.user}
            </h1>

            <div className="pl-4 pt-5  text-white ">
              <GetAppIcon style={{ fontSize: "15px" }} />
              <strong className="mr-1 text-sm tracking-wide">Dowloads:</strong>
              <strong className="text-sm"> {img.downloads}</strong>
            </div>
            <div className="pl-4 pt-5 text-white">
              <FavoriteIcon style={{ fontSize: "15px" }} className="mr-1" />
              <strong className="mr-1 text-sm tracking-wide">Likes:</strong>
              <strong className="text-sm">{img.likes}</strong>
            </div>

            <div className="pl-4 pt-5 text-white">
              <VisibilityIcon style={{ fontSize: "15px" }} className="mr-1" />
              <strong className="mr-1 text-sm tracking-wide">Views:</strong>
              <strong className="text-sm">{img.views}</strong>
            </div>

            <div className="pl-4 pt-5 text-white">
              <StarIcon style={{ fontSize: "15px" }} className="mr-1" />

              <strong className="mr-1 text-sm tracking-wide">Favorites:</strong>
              <strong className="text-sm">{img.favorites}</strong>
            </div>
          </div>

          <DownloadButton
            text="Download Free"
            color="accent"
            width="md:w-full w-4/5 mt-10 md:mt-4 "
            textColor="white"
            borderRadius="100px"
            downloadImage={() => download(img.largeImageURL)}
          />
        </div>
      ))}

      <ImageRelated colSpan="4" relatedImages={relatedImages} />
    </div>
  );
};

export default ImageDetailAndDownload;
