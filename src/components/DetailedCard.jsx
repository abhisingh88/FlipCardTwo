import React, { useState } from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
// import fetchFunc from "../API";
// import { useQuery } from "@tanstack/react-query";
// import Skeleton from "@mui/material/Skeleton";

import CardData from "./CardData";

function DetailedCard(params) {
  // State Variables
  const [isFlipped, setIsFlipped] = useState(true);
  const [id, setId] = useState(1);
  const [idInput, setIdInput] = useState(1);

  // Function to Handle the isFlipped state Variable
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Function to set the PhotoID
  const setInput = (e) => {
    setIdInput(e.target.value);
  };

  // function to set the queryID
  const setIdData = () => {
    setId(idInput);
  };

  // Return the UI
  return (
    <div>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item marginTop="160px">
          <Paper className="container" onClick={handleFlip}>
            <Card
              sx={{ border: "1px solid black" }}
              className={`cardContainer" ${isFlipped ? " flipped" : ""}`}
            >
              <CardData id={id} handleFlip={handleFlip} isFlipped={isFlipped} />
            </Card>
          </Paper>
        </Grid>
        <Grid item>
          <Box sx={{ margin: "10px" }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              // type="number"
              value={idInput}
              onChange={setInput}
              label="Search By ID"
            />
            <Button
              sx={{ margin: "8px" }}
              variant="contained"
              onClick={setIdData}
            >
              Fetch
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default DetailedCard;
