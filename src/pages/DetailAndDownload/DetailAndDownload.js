import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api/index";
import DownloadButton from "../../components/ui/Buttons/DownloadButton/_index";
import download from "../../utilities/imageDownload";
import ImageRelated from "../../components/ImageRelated/ImageRelated";
import DetailCard from "../../components/ui/DetailCard/DetailCard";

const ImageDetailAndDownload = () => {
  const { imageId } = useParams();
  const [image, setImage] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);

  useEffect(() => {
    (async () => {
      window.scrollTo(0, 0);

      const responseImage = await api.getImage(imageId);
      const responesImages = await api.getImages(
        "",
        1,
        15,
        "all",
        "horizontal"
      );

      setImage(responseImage.data.hits);
      setRelatedImages(responesImages.data.hits);
    })();
  }, [imageId]);

  return (
    <div className="grid grid-cols-1  md:grid-cols-4 py-10 md:gap-5 px-5 md:px-10 bg-gray-50">
      <div className="col-span-4 md:col-span-3 md:relative md:pb-8/12  bg-gray-200 rounded-3xl ">
        {image.map((imageDetail) => (
          <img
            className="object-scale-down md:absolute w-full h-full md:rounded-3xl"
            src={
              imageDetail.largeImageURL
                ? imageDetail.largeImageURL
                : imageDetail.user
            }
            alt={imageDetail.user}
          />
        ))}
      </div>

      {image?.map((imageDetail) => (
        <div className="w-full col-span-4 md:col-span-1 ">
          <DetailCard imageDetail={imageDetail} />

          <DownloadButton
            text="Download Free"
            color="accent"
            width="md:w-full w-4/5 mt-10 md:mt-4 "
            textColor="white"
            borderRadius="100px"
            downloadImage={() => download(imageDetail.largeImageURL)}
          />
        </div>
      ))}

      <ImageRelated colSpan="4" relatedImages={relatedImages} />
    </div>
  );
};

export default ImageDetailAndDownload;
