import React, { useEffect, useState } from "react";
import {
  RESET_IMAGES_BY_ORIENTATION,
  SET_IMAGES_BY_ORIENTATION,
} from "../../context/Types";

import api from "../../api/index";

import { useParams } from "react-router-dom";
import { GlobalStateValue } from "../../context/GlobalState";
import ProgressBar from "../../components/ui/ProgressBar/ProgressBar";
import SkeltonLoading from "../../components/ui/SkeltonLoading/SkeltonLoading";
import CustomInfiniteScroll from "../../components/ui/InfiniteScroll/InfinteScroll";
import NoImagesFound from "../../components/ui/NoImagesFound/NoImagesFound";

const Orientation = () => {
  const { orientationType } = useParams();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [{ imagesByOrientation }, dispatch] = GlobalStateValue();

  useEffect(() => {
    dispatch({
      type: RESET_IMAGES_BY_ORIENTATION,
    });

    fetchData();
  }, [orientationType]);

  const fetchData = async () => {
    await setPage(page + 1);
    try {
      const response = await api.imagesByOrientation(page, orientationType);
      dispatch({
        type: SET_IMAGES_BY_ORIENTATION,
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
      {imagesByOrientation.length > 0 ? (
        <CustomInfiniteScroll
          images={imagesByOrientation}
          fetchData={fetchData}
          isLoading={isLoading}
        />
      ) : (
        <NoImagesFound />
      )}
    </div>
  );
};

export default Orientation;
