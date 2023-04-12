import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import imgBg from "../img/25.png";

const JustBg = () => {
  return (
    <Stack
      sx={{
        // background: "linear-gradient(to bottom, #000000, #ffffff)",
        background: `url(${imgBg})`,
        backgroundSize: "cover",
        height: "400px",
        width: "100%",
        position: "relative",
      }}
    >
      <Button
        variant="contained"
        size="small"
        color="primary"
        sx={{
          backgroundImage: "linear-gradient(to bottom right, #EE0034, #8000FF)",
          height: "40px",
          width: "120px",
          fontSize: "18px",
          fontWeight: 400,
          textTransform: "capitalize",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        Add Event
      </Button>
    </Stack>
  );
};

export default JustBg;
