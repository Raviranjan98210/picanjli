import React, { useState, useEffect } from "react";
import api from "../../api/index";

import { GlobalStateValue } from "../../context/GlobalState";
import { SET_IMAGES } from "../../context/Types";
import CustomInfiniteScroll from "../../components/ui/InfiniteScroll/InfinteScroll";
import HeroImage from "../../components/ui/HeroImage/HeroImage";
import { RESET_ORIENTATION_TYPE } from "../../context/Types";

const Home = () => {
  const [{ images }, dispatch] = GlobalStateValue();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch({
      type: RESET_ORIENTATION_TYPE,
    });
    fetchData();
  }, []);

  const fetchData = async () => {
    await setPage(page + 1);
    try {
      const response = await api.getImages("", page);
      dispatch({
        type: SET_IMAGES,
        payload: response.data.hits,
      });
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <HeroImage />
      <CustomInfiniteScroll
        images={images}
        isLoading={isLoading}
        fetchData={fetchData}
      />
    </>
  );
};

export default Home;
