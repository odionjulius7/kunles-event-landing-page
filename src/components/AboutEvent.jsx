import { Container, Stack } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { useTheme } from "@mui/material/styles";

// Local import
import ImgAvatar from "../img/smiling-woman-with-afro-posing-pink-sweater.png";
import ImgAvatar1 from "../img/people.png";
import ImgAvatar2 from "../img/ladies.png";

const AboutEvent = () => {
  return (
    <Container>
      <Stack
        direction="row"
        spacing={2}
        sx={{ alignItems: "center", margin: "2rem 0" }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ width: "100%", padding: "15px", alignItems: "center" }}
        >
          <Stack spacing={2} sx={{ width: "100%" }}>
            <CardMedia
              component="img"
              sx={{ width: "90%", height: "50%" }}
              image={ImgAvatar}
              alt="Live from space album cover"
            />
            <CardMedia
              component="img"
              sx={{ width: "90%", height: "50%" }}
              image={ImgAvatar1}
              alt="Live from space album cover"
            />
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <CardMedia
              component="img"
              sx={{ width: "90%", height: "70%" }}
              image={ImgAvatar2}
              alt="Live from space album cover"
            />
          </Stack>
        </Stack>
        <Stack sx={{ width: "100%" }}>
          <CardContent sx={{ flex: "1 0 auto", padding: "0px" }}>
            <Typography
              variant="h5"
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: 600,
                fontSize: "24px",
                // marginTop: "2rem",
              }}
            >
              About My Event
            </Typography>
            <Typography
              variant="h4"
              color="text.secondary"
              component="div"
              sx={{
                fontSize: "36px",
                fontWeight: 500,
                margin: "1rem 0",
              }}
            >
              The{" "}
              <span style={{ color: "#EE0034" }}>
                ultimate online destination
                {/* <br /> */}
              </span>{" "}
              for all your event needs!
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
              sx={{
                fontWeight: 500,
                fontSize: "15px",
              }}
            >
              <p style={{ margin: "0.4rem" }}>
                We are a team of passionate event planners and enthusiasts,
                dedicated to bringing you the most comprehensive information
                about events happening around the world.{" "}
              </p>
              <p style={{ margin: "0.4rem" }}>
                Our mission is to make it easy for you to discover exciting
                events and experiences that align with your interests. Whether
                you're looking to attend a concert, participate in a workshop,
                or simply take in the local culture, we have got you covered.
              </p>
              <p style={{ margin: "0.4rem" }}>
                We have a vast network of event organizers and enthusiasts, who
                work together to bring you the latest information on events
                happening in your area. Our easy-to-use platform makes it simple
                to search for events by date, location, and category, so you can
                find exactly what you're looking for in no time.
              </p>
            </Typography>
          </CardContent>
        </Stack>
      </Stack>
    </Container>
  );
};

export default AboutEvent;

{
  /* <Box sx={{ display: "flex", flexDirection: "column" }}>
<CardContent sx={{ flex: "1 0 auto" }}>
  <img src={QuotationImg} alt="" />
  <Typography
    variant="subtitle1"
    color="text.secondary"
    component="div"
    sx={{
      fontWeight: 400,
    }}
  >
    "Thank you so much for your help. It's exactly what I've been
    looking for. You won't regret it. It really saves me time and
    effort. Oyetech is exactly what our business has been lacking."
  </Typography>
</CardContent>
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    pl: 1,
    pb: 1,
    fontSize: "20px",
    fontWeight: 600,
  }}
>
  Gloria Rose
</Box>
</Box> */
}
