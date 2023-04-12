import React from "react";
import { Button, CardActionArea, CardActions } from "@mui/material";

import Chip from "@mui/material/Chip";
import BgImg from "../../img/BG.png";
import LineImg from "../../img/line.png";
import { Stack } from "@mui/material";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import DropDownBtn from "../DropDownBtn";
import CardUserImg from "../CardUserImg";
import { SecondCards } from "../Cards/SecondCards";

// big.png

function UpcomingEventCards() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={3}
      sx={{ margin: "7rem 0" }}
    >
      <Stack
        sx={{
          // width: "55%",
          maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "95%",
            lg: "90%",
          },
        }}
      >
        <Stack sx={{ margin: "1rem 0" }}>
          <Typography
            sx={{ fontSize: "30px", fontWeight: 500 }}
            gutterBottom
            variant="h2"
            component="div"
          >
            Upcoming{" "}
            <Typography
              sx={{ color: "#EE0034", fontSize: "30px", fontWeight: 500 }}
              gutterBottom
              variant="h2"
              component="span"
            >
              Events
            </Typography>
          </Typography>
          <img width={155} src={LineImg} alt="" />
        </Stack>
        {/* First Card */}
        <Stack sx={{ margin: "1rem 0" }}>
          <Card sx={{ maxWidth: "100%", padding: "7px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={BgImg}
                alt="green iguana"
                sx={{ height: "310px" }}
              />
              <CardContent sx={{ padding: "5px" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Front-End Web Development: 5 Features of a Great Website (Web
                  Design)
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "25px" }}
                >
                  A good website, which serves as your company’s front door, is
                  the most crucial marketing component. If all you need is a
                  straightforward, off-the-shelf website that looks professional
                  enough to give your business a basic start, there are
                  thousands of pre-made templates and themes that make creating
                  a website [...]
                </Typography>
                {/*  */}
                <CardUserImg />
                {/*  */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
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
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                sx={{
                  height: "40px",
                  boder: "1px solid #8000FF",
                  color: "#EE0034",
                  padding: "10px, 30px, 10px, 30px !important",
                  fontSize: "18px",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                Not Attending
              </Button>
            </CardActions>
          </Card>
        </Stack>
        {/* Second Card */}
        <Stack sx={{ margin: "1rem 0" }}>
          <Card sx={{ maxWidth: "100%", padding: "7px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={BgImg}
                alt="green iguana"
                sx={{ height: "310px" }}
              />
              <CardContent sx={{ padding: "5px" }}>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontSize: "18px", fontWeight: 600 }}
                >
                  Front-End Web Development: 5 Features of a Great Website (Web
                  Design)
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: "14px", fontWeight: 400, lineHeight: "25px" }}
                >
                  A good website, which serves as your company’s front door, is
                  the most crucial marketing component. If all you need is a
                  straightforward, off-the-shelf website that looks professional
                  enough to give your business a basic start, there are
                  thousands of pre-made templates and themes that make creating
                  a website [...]
                </Typography>
                {/*  */}
                <CardUserImg />
                {/*  */}
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
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
              </Button>
              <Button
                variant="outlined"
                size="small"
                color="primary"
                sx={{
                  height: "40px",
                  boder: "1px solid #8000FF",
                  color: "#EE0034",
                  padding: "10px, 30px, 10px, 30px !important",
                  fontSize: "18px",
                  fontWeight: 500,
                  textTransform: "capitalize",
                }}
              >
                Not Attending
              </Button>
            </CardActions>
          </Card>
        </Stack>
      </Stack>

      {/* Second Grid */}

      <Stack
        sx={{
          // width: "45%",
          maxWidth: {
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "90%",
          },
        }}
      >
        <Stack
          direction="row"
          spacing={2}
          sx={{ margin: "1rem 0", justifyContent: "center" }}
        >
          <DropDownBtn
            children="Event Type"
            sx={{
              backgroundImage:
                "linear-gradient(to bottom right, #EE0034, #8000FF)",
              textTransform: "capitalize",
            }}
          />
          <DropDownBtn
            children="Event Category"
            sx={{
              textTransform: "capitalize",
              backgroundColor: "transparent ",
              color: "#EE0034",
              borderRadius: "5px",
              border: "1px solid #8000FF",
            }}
          />
        </Stack>
        <Stack spacing={2} sx={{ margin: "1.5rem 0" }}>
          <SecondCards />
          <Stack>
            <Stack sx={{ margin: "1.5rem 0" }}>
              <Typography
                sx={{ fontSize: "30px", fontWeight: 500 }}
                gutterBottom
                variant="h2"
                component="div"
              >
                Trending{" "}
                <Typography
                  sx={{ color: "#EE0034", fontSize: "30px", fontWeight: 500 }}
                  gutterBottom
                  variant="h2"
                  component="span"
                >
                  Events
                </Typography>
              </Typography>
              <img width={130} src={LineImg} alt="" />
            </Stack>
            <Stack direction="row" spacing={2} sx={{ margin: "1rem" }}>
              <Chip
                label="Wedding"
                variant="outlined"
                // onClick={handleClick}
                sx={{
                  padding: "1.2rem 1rem",
                  border: "1px solid #EE0034",
                  color: "#EE0034",
                }}
              />
              <Chip
                label="Birthday"
                variant="outlined"
                // onClick={handleClick}
                sx={{
                  padding: "1.2rem 1rem",
                  border: "1px solid #EE0034",
                  color: "#EE0034",
                }}
              />
              <Chip
                label="Burial"
                variant="outlined"
                // onClick={handleClick}
                sx={{
                  padding: "1.2rem 1rem",
                  border: "1px solid #EE0034",
                  color: "#EE0034",
                }}
              />
              <Chip
                label="Burial"
                variant="outlined"
                // onClick={handleClick}
                sx={{
                  padding: "1.2rem 1rem",
                  border: "1px solid #EE0034",
                  color: "#EE0034",
                }}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default UpcomingEventCards;
