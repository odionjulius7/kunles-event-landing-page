import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

export default function BasicTooltip({ children, text }) {
  const DeleteIcon1 = () => "Text";
  return (
    <Tooltip
      title={children}
      sx={{
        padding: "0px",
      }}
    >
      <Button
        sx={{
          cursor: "pointer",
          color: "white",
          fontSize: "17px",
          padding: "0px",
          margin: "0px",
          textTransform: "capitalize",
          transition: ".2s",
          "&:hover": {
            fontSize: "18px",
            marginBottom: "10px",
          },
        }}
      >
        {text}
      </Button>
    </Tooltip>
  );
}
