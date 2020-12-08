import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import axios from "axios";
import ImageSearch from "./components/ImageSearch";
import InfiniteScroll from "react-infinite-scroll-component";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: process.env.REACT_APP_PIXABAY_API_KEY,
          q: term,
          image_type: "photo",
          pretty: true,
          page: page,
        },
      });

      setImages(response.data.hits);
      setIsLoading(false);
    })(term);
  }, [term]);

  const fetchData = async () => {
    setPage(page + 1);
    const response = await axios.get("https://pixabay.com/api/", {
      params: {
        key: process.env.REACT_APP_PIXABAY_API_KEY,
        q: term,
        image_type: "photo",
        pretty: true,
        page: page,
      },
    });

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
        loader={<h4>Loading...</h4>}
      >
        <div className="grid grid-cols-4 gap-x-0 gap-7">
          {images.map((image, index) => (
            <ImageCard key={index} image={image} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

export default App;
