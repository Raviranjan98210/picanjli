import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import api from "../../api/index";
import { GlobalStateValue } from "../../context/GlobalState";
import {
  SET_SEARCHED_IMAGES,
  RESET_SEARCHED_IMAGES,
} from "../../context/Types";
import CustomInfiniteScroll from "../../components/ui/InfiniteScroll/InfinteScroll";

const Search = () => {
  const { searchTerm } = useParams();
  const [{ searchedImages }, dispatch] = GlobalStateValue();
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
      const response = await api.getImages(searchTerm, page);
      dispatch({
        type: SET_SEARCHED_IMAGES,
        payload: response.data.hits,
      });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <CustomInfiniteScroll
        images={searchedImages}
        fetchData={fetchData}
        isLoading={isLoading}
      />
    </>
  );
};

export default Search;
