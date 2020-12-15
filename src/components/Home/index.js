import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";
import InfiniteScroll from "react-infinite-scroll-component";

import ImageCard from "../ImageCard";
import ImageSearch from "../ImageSearch";
import SkeltonLoading from "../SkeltonLoading";
import api from "../../api/index";

const Home = () => {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await api.getImages(term, page);

      setImages(response.data.hits);
      setIsLoading(false);
    })();
  }, [term]);

  const fetchData = async () => {
    setPage(page + 1);

    const response = await api.getImages(term, page);

    setImages(images.concat(response.data.hits));
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />

      <InfiniteScroll
        dataLength={images.length}
        next={fetchData}
        hasMore={true}
        endMessage="You have seen all the images"
        loader={
          <div className="flex  flex-col justify-center items-center my-5">
            <Loader type="Circles" color="#6C63FF" height={80} width={80} />

            {images.length === 0 && !isLoading ? (
              <h1 className="text-purple-800 text-3xl mt-5">
                Sorry image not found with this term
              </h1>
            ) : (
              <h1 className="text-purple-800 text-2xl mt-2">Loading..</h1>
            )}
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7">
          {isLoading ? (
            <>
              <SkeltonLoading noOfBoxes={8} />
            </>
          ) : (
            images.map((image, index) => (
              <ImageCard key={index} image={image} />
            ))
          )}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Home;
