import React, { useState } from "react";
import CssCardData from "./CssCardData";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import "../css/CssFlipCard.scss";

function CssFlipCard() {
  const [isFlipped, setIsFlipped] = useState(true);
  const [id, setId] = useState(1);
  const [idInput, setIdInput] = useState(1);

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

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        marginTop="160px"
        onClick={() => {
          setIsFlipped(!isFlipped);
        }}
      >
        <div className="container">
          <div className="flip-card-outer">
            <div className="flip-card-inner hover-trigger hover">
              <CssCardData id={id} isFlipped={isFlipped} />
            </div>
          </div>
        </div>
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
  );
}

export default CssFlipCard;
