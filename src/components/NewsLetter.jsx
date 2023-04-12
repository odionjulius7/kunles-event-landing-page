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
                  fontSize: "28px",
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
                  fontSize: "25px",
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
              height: "100px",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="outlined-basic"
              variant="outlined"
              placeholder="Type here..."
              sx={{
                width: "40%",
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
                width: "120px",
                fontSize: "18px",
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

//
{
  /* <Button
                variant="contained"
                size="small"
                color="primary"
                sx={{
                  backgroundImage:
                    "linear-gradient(to bottom right, #EE0034, #8000FF)",
                  padding: "10px, 30px, 10px, 30px",
                  height: "40px",
                  width: "120px",
                  fontSize: "18px",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                Attending
              </Button> */
}
