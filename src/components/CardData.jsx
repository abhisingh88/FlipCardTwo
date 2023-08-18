import React from "react";
import fetchFunc from "../API";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";

import FrontSide from "./InnerCard/FrontSide";
import BackSide from "./InnerCard/BackSide";

import { Typography, Box, CardMedia, Paper, CardContent } from "@mui/material";
import FallBack from "../static/NotFound.jpg";

function CardData({ id, isFlipped }) {
  // Use Query Call for Fetching Data
  const { data, isLoading, isFetching, isError, isSuccess, error } = useQuery(
    ["imgData", id],
    fetchFunc,
    {
      select: (data) => {
        return data.photo; //Filtering data
      }
    }
  );

  // Displaying Error message
  if (isError) {
    if (error.message === "Failed to fetch") {
      return (
        <Box>
          <FrontSide />
          <CardContent>
            <Typography>Error Occured!, Please Check Your Query!</Typography>
          </CardContent>
        </Box>
      );
    } else {
      return (
        <Box
          className="back "
          sx={{ height: "220px", width: "280px", padding: "10px" }}
        >
          <CardContent>
            <Typography>Unkown Error Occured</Typography>
          </CardContent>
        </Box>
      );
    }
  }

  if (isLoading) {
    return <Skeleton variant="sqaure" width={250} height={210} />;
  }

  if (isSuccess) {
    return isFlipped ? (
      <FrontSide url={data?.url} />
    ) : (
      <BackSide title={data?.title} description={data?.description} />
    );
  }
}

export default CardData;
