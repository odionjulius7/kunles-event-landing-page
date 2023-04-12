import React from "react";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import ImgAvatar1 from "../img/mapDot.png";
import ImgAvatar2 from "../img/mapimage.png";

const Contact = () => {
  return (
    <Stack>
      {" "}
      <Stack
        sx={{ width: "100%", textAlign: "center", margin: "7rem 0 3rem 0" }}
      >
        <CardContent sx={{ flex: "1 0 auto", padding: "0px" }}>
          <Typography
            variant="h5"
            color="text.secondary"
            component="div"
            sx={{
              fontWeight: 600,
              fontSize: "24px",
              color: "#000714",
            }}
          >
            Contact us
          </Typography>
          <Typography
            variant="h4"
            color="text.secondary"
            component="div"
            sx={{
              fontSize: "36px",
              fontWeight: 500,
              margin: "1rem 0",
              color: "#000714",
            }}
          >
            We Would Love To{" "}
            <span style={{ color: "#EE0034" }}>
              Hear From You
              {/* <br /> */}
            </span>{" "}
          </Typography>
        </CardContent>
      </Stack>
      <Stack sx={{ width: "100%", position: "relative" }}>
        <CardMedia
          component="img"
          sx={{ width: "70%", height: "auto", margin: "0 auto" }}
          image={ImgAvatar2}
          alt="Live from space album cover"
        />
        <CardMedia
          component="img"
          sx={{
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "54%",
            left: "23%",
          }}
          image={ImgAvatar1}
          alt="Live from space album cover"
        />
        <CardMedia
          component="img"
          sx={{
            width: "20px",
            height: "20px",
            position: "absolute",
            top: "34%",
            right: "43%",
          }}
          image={ImgAvatar1}
          alt="Live from space album cover"
        />
        <CardMedia
          component="img"
          sx={{
            width: "20px",
            height: "20px",
            position: "absolute",
            bottom: "19%",
            right: "34%",
          }}
          image={ImgAvatar1}
          alt="Live from space album cover"
        />
      </Stack>
    </Stack>
  );
};

export default Contact;
