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
          direction="row"
          // spacing={3}
          sx={{ justifyContent: "space-between", paddingTop: "5.5rem" }}
        >
          <Typography variant="h5" component="div">
            MY EVENT
          </Typography>
          <Stack
            direction="row"
            spacing={7}
            sx={{ fontSize: "16", fontWeight: 400 }}
          >
            <Typography
              variant="h5"
              component="div"
              sx={{
                fontSize: "20px",
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
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "#ffffff94",
                  marginBottom: "1rem",
                }}
              >
                Company
              </Typography>
              <Typography variant="subtitle1" component="div">
                Affiliate Program
              </Typography>
              <Typography variant="subtitle1" component="div">
                Agents
              </Typography>
              <Typography variant="subtitle1" component="div">
                Help
              </Typography>
              <Typography variant="subtitle1" component="div">
                Contact Us
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "#ffffff94",
                  marginBottom: "1rem",
                }}
              >
                Users
              </Typography>
              <Typography variant="subtitle1" component="div">
                Organisation
              </Typography>
              <Typography variant="subtitle1" component="div">
                Schools
              </Typography>
              <Typography variant="subtitle1" component="div">
                Individual
              </Typography>
              <Typography variant="subtitle1" component="div">
                Govt
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontSize: "20px",
                  fontWeight: 400,
                  color: "#ffffff94",
                  marginBottom: "1rem",
                }}
              >
                Products
              </Typography>
              <Typography variant="subtitle1" component="div">
                Buy Motor Insurance
              </Typography>
              <Typography variant="subtitle1" component="div">
                Airtime
              </Typography>
              <Typography variant="subtitle1" component="div">
                Data
              </Typography>
              <Typography variant="subtitle1" component="div">
                School Manager
              </Typography>
            </Stack>

            <Typography
              variant="h6"
              component="div"
              sx={{
                fontSize: "20px",
                fontWeight: 400,
                color: "#ffffff94",
                marginBottom: "1rem",
              }}
            >
              About
            </Typography>
          </Stack>
        </Stack>
        <Divider sx={{ backgroundColor: "#F5F5F5", margin: "5rem 0 2rem 0" }} />
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Typography component="div">
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
