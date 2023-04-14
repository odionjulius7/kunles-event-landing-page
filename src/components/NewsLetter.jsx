import {
  Button,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import imgBg from "../img/25.png";

const NewsLetter = () => {
  return (
    <Stack
      sx={{
        background: `url(${imgBg})`,
        backgroundSize: "cover",
        height: "450px",
        width: "100%",
        padding: "4rem",
      }}
    >
      <Container>
        <Stack sx={{ color: "white", textAlign: "center" }}>
          <Stack
            sx={{
              width: "100%",
              margin: "1rem 0",
              margin: "2rem auto",
            }}
          >
            <CardContent sx={{ flex: "1 0 auto", padding: "0px" }}>
              <Typography
                variant="h5"
                color="text.secondary"
                component="div"
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    xs: "22px",
                    sm: "25px",
                    md: "28px",
                    lg: "28px",
                  },
                  color: "#ffffff",
                }}
              >
                Newsletter
              </Typography>
              <Typography
                variant="h4"
                color="text.secondary"
                component="div"
                sx={{
                  fontSize: {
                    xs: "15px",
                    sm: "22px",
                    md: "25px",
                    lg: "25px",
                  },
                  fontWeight: 400,
                  margin: "1rem 0",
                  color: "#ffffff",
                }}
              >
                Subscribe to our newsletter to receive weekly <br /> updates
                about OUR LATEST EVENTS
              </Typography>
            </CardContent>
          </Stack>
          {/* <Stack sx={{ width: "100%", margin: "0 auto" }}> */}
          <Stack
            direction="row"
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                width: {
                  xs: "95%",
                  sm: "80%",
                  md: "50%",
                  lg: "50%",
                },
                backgroundColor: "white",
                borderRadius: "5px",
                height: "40px",
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  padding: "9px",
                },
              }}
            />
            <Button
              variant="contained"
              size="small"
              color="primary"
              sx={{
                backgroundImage:
                  "linear-gradient(to bottom right, #EE0034, #8000FF)",
                height: "40px",
                width: {
                  xs: "100px",
                  md: "120px",
                },
                fontSize: {
                  xs: "15px",
                  md: "18px",
                },
                fontWeight: 400,
                textTransform: "capitalize",
                marginLeft: "-0.4rem",
              }}
            >
              Attending
            </Button>
          </Stack>
          {/* </Stack> */}
        </Stack>
      </Container>
    </Stack>
  );
};

export default NewsLetter;
