import React, { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import axios from "axios";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      console.log(term);
      const response = await axios.get("https://pixabay.com/api/", {
        params: {
          key: process.env.REACT_APP_PIXABAY_API_KEY,
          q: term,
          image_type: "photo",
          pretty: true,
        },
      });

      setImages(response.data.hits);
      setIsLoading(false);
    })(term);
  }, [term]);

  return (
    <div className="container mx-auto">
      <ImageSearch searchText={(text) => setTerm(text)} />
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <ImageCard key={index} image={image} />
        ))}
      </div>
      <ImageCard />
    </div>
  );
}

export default App;
