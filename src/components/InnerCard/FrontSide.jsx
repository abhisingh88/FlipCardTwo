import React from "react";
import { CardMedia } from "@mui/material";
import FallBack from "../../static/NotFound.jpg";

function FrontSide({ url }) {
  return (
    <div className="front ">
      <CardMedia
        component="img"
        height={250}
        width={100}
        image={url || FallBack}
        alt="green iguana"
      />
    </div>
  );
}

export default FrontSide;
