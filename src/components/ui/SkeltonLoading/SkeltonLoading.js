import React from "react";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";

function SkeltonLoading({ noOfBoxes }) {
  return (
    <>
      {Array.from(new Array(noOfBoxes)).map((item, index) => (
        <Box key={index} width={300} my={5} className="mx-auto max-w-full">
          <Skeleton variant="rect" width={300} height={200} />

          <Skeleton />
          <Skeleton width="60%" />
        </Box>
      ))}
    </>
  );
}

SkeltonLoading.defaultProps = {
  noOfBoxes: 8,
};
export default SkeltonLoading;
