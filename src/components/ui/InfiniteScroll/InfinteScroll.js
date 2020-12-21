import React from "react";
import SkeltonLoading from "../../SkeltonLoading";
import Loader from "react-loader-spinner";
import MasonaryCustom from "../ImageMasonry/ImageMasonry";
import InfiniteScroll from "react-infinite-scroll-component";

const CustomInfiniteScroll = ({ images, isLoading, fetchData, hello }) => {
  return (
    <>
      {images ? (
        <InfiniteScroll
          className="px-5 md:px-10 py-6"
          dataLength={images.length}
          next={fetchData}
          hasMore={true}
          endMessage="You have seen all the images"
          loader={
            <div className="flex  flex-col justify-center items-center  my-5">
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
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7">
              <SkeltonLoading noOfBoxes={8}></SkeltonLoading>
            </div>
          ) : (
            <MasonaryCustom images={images} />
          )}
        </InfiniteScroll>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-4 gap-x-0 gap-7">
          <SkeltonLoading noOfBoxes={8}></SkeltonLoading>
        </div>
      )}
    </>
  );
};

export default CustomInfiniteScroll;
