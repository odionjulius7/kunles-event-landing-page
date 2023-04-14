import {
  CardContent,
  Typography,
  Stack,
  Card,
  Box,
  AppBar,
  Button,
  Toolbar,
  CardMedia,
} from "@mui/material";
import React from "react";

import imgLogo from "../img/arrow-circle-right.png";

const FAQSetcion = () => {
  return (
    <Stack sx={{ margin: "2rem 0 7rem 0" }}>
      <CardContent
        sx={{
          flex: "1 0 auto",
          padding: "0px",
          margin: "4rem 0 1.5rem 0",
          textAlign: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <Typography
          variant="h5"
          color="text.secondary"
          component="div"
          sx={{
            fontWeight: 600,
            fontSize: "24px",
          }}
        >
          FAQ
        </Typography>
        <Typography
          variant="h4"
          color="text.secondary"
          component="div"
          sx={{
            fontSize: {
              xs: "20px",
              sm: "30px",
              md: "36px",
            },
            fontWeight: 500,
            margin: {
              xs: "0.5rem 0",
              sm: "1rem 0",
              md: "1rem 0",
            },
          }}
        >
          HOW CAN WE <span style={{ color: "#EE0034" }}>HELP YOU?</span>
        </Typography>
      </CardContent>
      <Card sx={{ width: "100%", height: "auto", backgroundColor: "#F5F5F5" }}>
        <Stack>
          <Box sx={{ flexGrow: 1, margin: "1rem 0.7rem" }}>
            <AppBar
              position="static"
              sx={{
                backgroundColor: "#ffffff",
                color: "#000000",
                cursor: "pointer",
              }}
            >
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: {
                      xs: "14px",
                      sm: "16px",
                      md: "20px",
                    },
                    fontWeight: "400",
                  }}
                >
                  Is there a program schedule available for the event?
                </Typography>
                <Button color="inherit">
                  <CardMedia
                    component="img"
                    sx={{
                      width: {
                        xs: "60%", // default width for extra small screens
                        sm: "37px", // width for small screens and up
                        md: "45px", // width for medium screens and up
                      },
                    }}
                    image={imgLogo}
                    alt="Live from space album cover"
                  />
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Box sx={{ flexGrow: 1, margin: "1rem 0.7rem" }}>
            <AppBar
              position="static"
              sx={{ backgroundColor: "#ffffff", color: "#000000" }}
            >
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: {
                      xs: "15px",
                      sm: "17px",
                      md: "20px",
                    },
                    fontWeight: "400",
                  }}
                >
                  Are there any security measures in place for the event?
                </Typography>
                <Button color="inherit">
                  <CardMedia
                    component="img"
                    sx={{
                      width: {
                        xs: "60%", // default width for extra small screens
                        sm: "37px", // width for small screens and up
                        md: "45px", // width for medium screens and up
                      },
                    }}
                    image={imgLogo}
                    alt="Live from space album cover"
                  />
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Box sx={{ flexGrow: 1, margin: "1rem 0.7rem" }}>
            <AppBar
              position="static"
              sx={{ backgroundColor: "#ffffff", color: "#000000" }}
            >
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: {
                      xs: "15px",
                      sm: "17px",
                      md: "20px",
                    },
                    fontWeight: "400",
                  }}
                >
                  What is the parking situation at the event venue?
                </Typography>
                <Button color="inherit">
                  <CardMedia
                    component="img"
                    sx={{
                      width: {
                        xs: "60%", // default width for extra small screens
                        sm: "37px", // width for small screens and up
                        md: "45px", // width for medium screens and up
                      },
                    }}
                    image={imgLogo}
                    alt="Live from space album cover"
                  />
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Box sx={{ flexGrow: 1, margin: "1rem 0.7rem" }}>
            <AppBar
              position="static"
              sx={{ backgroundColor: "#ffffff", color: "#000000" }}
            >
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: {
                      xs: "15px",
                      sm: "17px",
                      md: "20px",
                    },
                    fontWeight: "400",
                  }}
                >
                  Is there accessibility for guests with disabilities at the
                  event venue?
                </Typography>
                <Button color="inherit">
                  <CardMedia
                    component="img"
                    sx={{
                      width: {
                        xs: "60%", // default width for extra small screens
                        sm: "37px", // width for small screens and up
                        md: "45px", // width for medium screens and up
                      },
                    }}
                    image={imgLogo}
                    alt="Live from space album cover"
                  />
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <Box sx={{ flexGrow: 1, margin: "1rem 0.7rem" }}>
            <AppBar
              position="static"
              sx={{ backgroundColor: "#ffffff", color: "#000000" }}
            >
              <Toolbar>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: {
                      xs: "15px",
                      sm: "17px",
                      md: "20px",
                    },
                    fontWeight: "400",
                  }}
                >
                  How can I purchase tickets for the event?
                </Typography>
                <Button color="inherit">
                  <CardMedia
                    component="img"
                    sx={{
                      width: {
                        xs: "60%", // default width for extra small screens
                        sm: "37px", // width for small screens and up
                        md: "45px", // width for medium screens and up
                      },
                    }}
                    image={imgLogo}
                    alt="Live from space album cover"
                  />
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
        </Stack>
      </Card>
    </Stack>
  );
};

export default FAQSetcion;
