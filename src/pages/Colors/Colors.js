import React, { useEffect, useState } from "react";
import {
  RESET_IMAGES_BY_COLORS,
  SET_IMAGES_BY_COLORS,
} from "../../context/Types";

import api from "../../api/index";

import { useParams } from "react-router-dom";
import { GlobalStateValue } from "../../context/GlobalState";
import ProgressBar from "../../components/ui/ProgressBar/ProgressBar";
import SkeltonLoading from "../../components/ui/SkeltonLoading/SkeltonLoading";
import CustomInfiniteScroll from "../../components/ui/InfiniteScroll/InfinteScroll";
import NoImagesFound from "../../components/ui/NoImagesFound/NoImagesFound";

const Colors = () => {
  const { color } = useParams();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [{ imagesByColor }, dispatch] = GlobalStateValue();

  useEffect(() => {
    dispatch({
      type: RESET_IMAGES_BY_COLORS,
    });

    fetchData();
  }, [color]);

  const fetchData = async () => {
    await setPage(page + 1);
    try {
      const response = await api.imagesByColor(page, color);
      dispatch({
        type: SET_IMAGES_BY_COLORS,
        payload: response.data.hits,
      });

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return (
      <>
        <ProgressBar />
        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7">
          <SkeltonLoading noOfBoxes={8}></SkeltonLoading>
        </div>
      </>
    );
  }

  return (
    <div>
      {imagesByColor.length > 0 ? (
        <CustomInfiniteScroll
          images={imagesByColor}
          fetchData={fetchData}
          isLoading={isLoading}
        />
      ) : (
        <NoImagesFound />
      )}
    </div>
  );
};

export default Colors;
