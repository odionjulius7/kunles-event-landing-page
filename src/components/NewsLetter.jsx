import {
  Button,
  CardContent,
  Container,
  Input,
  TextField,
  Typography,
} from "@mui/material";

import { Box, AppBar, Toolbar } from "@mui/material";
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
        padding: "4rem 0",
      }}
    >
      <Container sx={{ width: "100%" }}>
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
          {/* <Stack
            direction="row"
            sx={{
              backgroundColor: "white",
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
          </Stack> */}
          {/* </Stack> */}
          {/* <Box
            sx={{
              flexGrow: 1,
              width: "100%",
              minHeight: "35px",
            }}
          > */}
          {/* <AppBar
            position="static"
            sx={{
              width: "100%",
              margin: "0px auto",
            }}
          > */}
          {/* <Toolbar
            sx={{
              backgroundColor: "#ffffff",
              color: "#000000",
              width: "60%",
              height: "30px",
              display: "flex",
              alignItems: "center",
              padding: "1rem",
              // flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Input
              id="outlined-basic"
              variant="outlined"
              placeholder="Enter your email"
              sx={{
                width: {
                  xs: "80%",
                  sm: "80%",
                  md: "80%",
                  lg: "80%",
                },
                backgroundColor: "white",
                borderRadius: "5px",
                height: "100%",
                "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
                  // padding: "8px",
                },
              }}
            />
            <Button
              sx={{
                width: "20%",
                backgroundImage:
                  "linear-gradient(to bottom right, #EE0034, #8000FF)",
                height: "100%",
                marginLeft: "-1rem",
                color: "#ffffff",
              }}
              color="inherit"
            >
              Attending
            </Button>
          </Toolbar> */}
          {/* </AppBar> */}
          {/* </Box> */}
        </Stack>
        <Stack
          direction="row"
          sx={{
            backgroundColor: "#ffffff",
            color: "#000000",
            width: {
              xs: "100%",
              sm: "90%",
              md: "70%",
              lg: "65%",
            },
            height: "40px",
            alignItems: "center",
            borderRadius: "5px",
            margin: "0px auto",
          }}
        >
          <Input
            id="outlined-basic"
            variant="outlined"
            placeholder="Enter your email"
            sx={{
              width: {
                xs: "70%",
                sm: "75%",
                md: "75%",
                lg: "75%",
              },
              backgroundColor: "white",
              borderRadius: "5px",
              height: "100%",
              "& .css-1x51dt5-MuiInputBase-input-MuiInput-input:focus": {
                borderBottom: "none",
                outline: "none",
              },
              padding: "7px",
              border: "none",
              outline: "none",
              "&:focus": {
                borderBottom: "none",
                outline: "none",
              },
            }}
          />
          <Button
            sx={{
              width: {
                xs: "30%",
                sm: "25%",
                md: "25%",
                lg: "25%",
              },
              backgroundImage:
                "linear-gradient(to bottom right, #EE0034, #8000FF)",
              height: "100%",
              // marginLeft: "-1rem",
              color: "#ffffff",
              fontSize: {
                xs: "12px",
                sm: "14px",
                md: "16px",
              },
              fontWeight: 600,
            }}
            color="inherit"
          >
            Attending
          </Button>
        </Stack>
      </Container>
    </Stack>
  );
};

export default NewsLetter;
