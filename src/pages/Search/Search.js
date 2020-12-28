import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../api/index";
import { GlobalStateValue } from "../../context/GlobalState";
import {
  SET_SEARCHED_IMAGES,
  RESET_SEARCHED_IMAGES,
} from "../../context/Types";
import CustomInfiniteScroll from "../../components/ui/InfiniteScroll/InfinteScroll";
import NoImagesFound from "../../components/ui/NoImagesFound/NoImagesFound";
import ProgressBar from "../../components/ui/ProgressBar/ProgressBar";
import SkeltonLoading from "../../components/ui/SkeltonLoading/SkeltonLoading";

const Search = () => {
  const { searchTerm } = useParams();
  const [{ searchedImages, orientation_type }, dispatch] = GlobalStateValue();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch({
      type: RESET_SEARCHED_IMAGES,
    });

    fetchData();
  }, [searchTerm]);

  const fetchData = async () => {
    await setPage(page + 1);
    try {
      const response = await api.getImages(
        searchTerm,
        page,
        20,
        orientation_type
      );
      dispatch({
        type: SET_SEARCHED_IMAGES,
        payload: response.data.hits,
      });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
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
    <>
      {searchedImages.length > 0 ? (
        <CustomInfiniteScroll
          images={searchedImages}
          fetchData={fetchData}
          isLoading={isLoading}
        />
      ) : (
        <NoImagesFound />
      )}
    </>
  );
};

export default Search;
