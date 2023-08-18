import React from "react";
import { CardContent, Typography, Box } from "@mui/material";

function BackSide({ title, description }) {
  return (
    <Box
      className="back "
      sx={{ height: "220px", width: "280px", padding: "10px" }}
    >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title || "Error Occured"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description || "Please Try Again!"}
        </Typography>
      </CardContent>
    </Box>
  );
}

export default BackSide;
