import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Axios from "axios";
import api from "../../api/index";
import CustomInfiniteScroll from "../../components/ui/InfiniteScroll/InfinteScroll";

const ImageTypes = () => {
  const { imageType } = useParams();

  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setImages([]);
    fetchData();
  }, [imageType]);

  const fetchData = async () => {
    await setPage(page + 1);
    try {
      const response = await api.getImages("", page, 20, imageType);
      setImages(images.concat(response.data.hits));
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <CustomInfiniteScroll
        images={images}
        fetchData={fetchData}
        isLoading={isLoading}
      />
    </>
  );
};

export default ImageTypes;
