import {
  Button,
  CardMedia,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import InstagramImg from "../../img/instagram.png";
import LinkedInImg from "../../img/linkedin.png";
import TwitterImg from "../../img/twitter.png";

const Footer = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "#000714",
        // background: `url(${imgBg})`,
        backgroundSize: "cover",
        height: "auto",
        width: "100%",
        color: "#ffffff",
        paddingBottom: "30px",
      }}
    >
      <Container>
        <Stack
          direction={{
            xs: "column",
            md: "row",
          }}
          // spacing={3}
          sx={{
            justifyContent: {
              xs: "center",
              md: "space-between",
            },
            alignItems: {
              xs: "center",
              md: "unset",
            },
            paddingTop: {
              xs: "2rem",
              md: "5.5rem",
            },
          }}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              margin: {
                xs: "0rem 0 2rem 0",
                md: "0rem",
              },
              fontSize: {
                xs: "21px",
                md: "24px",
              },
            }}
          >
            MY EVENT
          </Typography>
          <Stack
            direction="row"
            spacing={{
              xs: 2,
              md: 7,
            }}
            sx={{ fontSize: "16", fontWeight: 400 }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontSize: {
                  xs: "16px",
                  md: "20px",
                },
                fontWeight: 400,
                color: "#ffffff94",
                marginBottom: "1rem",
              }}
            >
              Home
            </Typography>
            <Stack>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontSize: {
                    xs: "16px",
                    md: "20px",
                  },
                  fontWeight: 400,
                  color: "#ffffff94",
                  marginBottom: "1rem",
                }}
              >
                Company
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Affiliate Program
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Agents
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Help
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Contact Us
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontSize: {
                    xs: "16px",
                    md: "20px",
                  },
                  fontWeight: 400,
                  color: "#ffffff94",
                  marginBottom: "1rem",
                }}
              >
                Users
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Organisation
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Schools
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Individual
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Govt
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontSize: {
                    xs: "16px",
                    md: "20px",
                  },
                  fontWeight: 400,
                  color: "#ffffff94",
                  marginBottom: "1rem",
                }}
              >
                Products
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Buy Motor Insurance
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Airtime
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                Data
              </Typography>
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  fontSize: {
                    xs: "13px",
                    md: "16px",
                  },
                }}
              >
                School Manager
              </Typography>
            </Stack>

            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: {
                  xs: "16px",
                  md: "20px",
                },
                fontWeight: 400,
                color: "#ffffff94",
                marginBottom: "1rem",
              }}
            >
              About
            </Typography>
          </Stack>
        </Stack>
        <Divider
          sx={{
            backgroundColor: "#F5F5F5",
            margin: {
              xs: "3rem 0 2rem 0",
              sm: "5rem 0 2rem 0",
            },
          }}
        />
        <Stack
          direction={{
            xs: "column",
            sm: "row",
            md: "row",
          }}
          sx={{
            justifyContent: "space-between",
            alignItems: {
              xs: "center",
              sm: "unset",
            },
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: {
                xs: "13px",
                md: "16px",
              },
              marginBottom: {
                xs: "1rem",
                sm: "0rem",
              },
            }}
          >
            © 2023 MY EVENT. All Right Reserved
          </Typography>
          <Stack direction="row" spacing={2}>
            <CardMedia
              component="img"
              sx={{ width: "30px", height: "30px" }}
              image={LinkedInImg}
              alt="Live from space album cover"
            />
            <CardMedia
              component="img"
              sx={{ width: "30px", height: "30px" }}
              image={TwitterImg}
              alt="Live from space album cover"
            />
            <CardMedia
              component="img"
              sx={{ width: "30px", height: "30px" }}
              image={InstagramImg}
              alt="Live from space album cover"
            />
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};

export default Footer;
