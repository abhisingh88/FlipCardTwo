import React from "react";
import fetchFunc from "../../API";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "@mui/material/Skeleton";
import FallBack from "../../static/NotFound.jpg";

import { CardMedia, CardContent, Typography } from "@mui/material";

function CssCardData({ id, isFlipped }) {
  // Use Query Call for Fetching Data
  const { data, isLoading, isFetching, isError, isSuccess, error } = useQuery(
    ["imgData", id],
    fetchFunc,
    {
      onError: (error) => {
        if (error.message === "Failed to fetch") {
          return <div>Failed to fetch data: {error.message}</div>;
        } else if (error.message === "Unkown error Occured, plzz try again!!") {
          return <div>Server Error: {error.message}</div>;
        } else {
          return <div>Unkown Error Occured!!</div>;
        }
      },
      select: (data) => {
        return data.photo; //Filtering data
      }
    }
  );

  // Displaying Error message
  if (isError) {
    console.log("error from if: ", error.message);
    return error.message;
  }

  // Displaying Skeleton On loading and on fetching of the data
  if (isLoading || isFetching) {
    return <Skeleton variant="sqaure" width={250} height={210} />;
  }

  if (isSuccess) {
    return isFlipped ? (
      <div className="card front">
        <div>
          <CardMedia
            component="img"
            height={350}
            width={100}
            image={data?.url || FallBack}
            alt="green iguana"
          />
        </div>
      </div>
    ) : (
      <div className="card back">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data?.description}
          </Typography>
        </CardContent>
      </div>
    );
  }
}

export default CssCardData;
