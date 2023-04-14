import React from "react";
import { Button, CardActions } from "@mui/material";
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
import { ArrowDropDown, ArrowDropDownOutlined } from "@mui/icons-material";

// big.png

function UpcomingEventCards() {
  return (
    <Stack
      direction={{ xs: "column", sm: "column", md: "row" }}
      spacing={3}
      sx={{
        margin: {
          xs: "4rem 0",
          sm: "4rem 0",
          md: "7rem 0",
          lg: "7rem 0",
        },
      }}
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
        <Stack
          sx={{
            margin: "1rem 0",
            textAlign: {
              xs: "center",
              sm: "center",
              md: "start",
              lg: "start",
            },
          }}
        >
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
          <Stack
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "20%",
                lg: "20%",
              },
            }}
          >
            <img width={"100%"} src={LineImg} alt="" />
          </Stack>
        </Stack>
        {/* First Card */}
        <Stack sx={{ margin: "1rem 0" }}>
          <Card
            sx={{
              maxWidth: "100%",
              padding: "15px",
              // marginBottom: "1rem",
              boxShadow: "0px 10px 60px rgba(103, 34, 181, 0.08)",
            }}
          >
            {/* <CardActionArea> */}
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
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "14px",
                    md: "17px",
                    lg: "18px",
                  },
                  fontWeight: {
                    xs: 700,
                    sm: 600,
                    md: 600,
                    lg: 600,
                  },
                }}
              >
                Front-End Web Development: 5 Features of a Great Website (Web
                Design)
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                  },
                  fontWeight: 400,
                  lineHeight: "25px",
                }}
              >
                A good website, which serves as your company’s front door, is
                the most crucial marketing component. If all you need is a
                straightforward, off-the-shelf website that looks professional
                enough to give your business a basic start, there are thousands
                of pre-made templates and themes that make creating a website
                [...]
              </Typography>
              {/*  */}
              <CardUserImg />
              {/*  */}
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions
              sx={{
                justifyContent: {
                  xs: "center",
                  sm: "start",
                  md: "start",
                  lg: "start",
                },
                margin: "1rem 0",
              }}
            >
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
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "18px",
                    lg: "18px",
                  },
                  fontWeight: 500,

                  textTransform: "capitalize",
                }}
              >
                Attending
              </Button>
              <Button
                variant="text"
                size="small"
                color="primary"
                sx={{
                  border: "none",
                  color: "#EE0034",
                  width: {
                    xs: "120px",
                    sm: "140px",
                    md: "150px",
                    lg: "150px",
                  },
                  height: "40px",
                  padding: "2px",
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "18px",
                    lg: "18px",
                  },
                  background: "red",
                  borderRadius: "4px",
                  backgroundImage:
                    "linear-gradient(to bottom right, #EE0034, #8000FF)",
                  overflow: "hidden",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(to bottom right, #EE0034, #8000FF)",
                    color: "#fff",
                    border: "none",
                  },
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(to bottom right, #EE0034, #8000FF)",
                      color: "#fff",
                      border: "none",
                    },
                    fontSize: {
                      xs: "14px",
                      sm: "15px",
                      md: "18px",
                      lg: "18px",
                    },
                  }}
                >
                  Not Attending
                </Typography>
              </Button>
            </CardActions>
          </Card>
        </Stack>
        {/* Second Card */}
        <Stack sx={{ margin: "1rem 0" }}>
          <Card
            sx={{
              maxWidth: "100%",
              padding: "15px",
              // marginBottom: "1rem",
              boxShadow: "0px 10px 60px rgba(103, 34, 181, 0.08)",
            }}
          >
            {/* <CardActionArea> */}
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
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "14px",
                    md: "17px",
                    lg: "18px",
                  },
                  fontWeight: {
                    xs: 700,
                    sm: 600,
                    md: 600,
                    lg: 600,
                  },
                }}
              >
                Front-End Web Development: 5 Features of a Great Website (Web
                Design)
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                  },
                  fontWeight: 400,
                  lineHeight: "25px",
                }}
              >
                A good website, which serves as your company’s front door, is
                the most crucial marketing component. If all you need is a
                straightforward, off-the-shelf website that looks professional
                enough to give your business a basic start, there are thousands
                of pre-made templates and themes that make creating a website
                [...]
              </Typography>
              {/*  */}
              <CardUserImg />
              {/*  */}
            </CardContent>
            {/* </CardActionArea> */}
            <CardActions
              sx={{
                justifyContent: {
                  xs: "center",
                  sm: "start",
                  md: "start",
                  lg: "start",
                },
                margin: "1rem 0",
              }}
            >
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
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "18px",
                    lg: "18px",
                  },
                  fontWeight: 500,

                  textTransform: "capitalize",
                }}
              >
                Attending
              </Button>
              <Button
                variant="text"
                size="small"
                color="primary"
                sx={{
                  border: "none",
                  color: "#EE0034",
                  width: {
                    xs: "120px",
                    sm: "140px",
                    md: "150px",
                    lg: "150px",
                  },
                  height: "40px",
                  padding: "2px",
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "18px",
                    lg: "18px",
                  },
                  background: "red",
                  borderRadius: "4px",
                  backgroundImage:
                    "linear-gradient(to bottom right, #EE0034, #8000FF)",
                  overflow: "hidden",
                  "&:hover": {
                    backgroundImage:
                      "linear-gradient(to bottom right, #EE0034, #8000FF)",
                    color: "#fff",
                    border: "none",
                  },
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    height: "100%",
                    background: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundImage:
                        "linear-gradient(to bottom right, #EE0034, #8000FF)",
                      color: "#fff",
                      border: "none",
                    },
                    fontSize: {
                      xs: "14px",
                      sm: "15px",
                      md: "18px",
                      lg: "18px",
                    },
                  }}
                >
                  Not Attending
                </Typography>
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
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "18px",
                lg: "18px",
              },
              padding: {
                xs: "6px 8px",
                sm: "6px 16px",
                md: "6px 16px",
                lg: "6px 16px",
              },
            }}
          />
          <Button
            sx={{
              background: "transparent",
              textTransform: "capitalize",
              color: "#EE0034",
              border: "none",
              width: {
                xs: "140px",
                sm: "160px",
                md: "170px",
                lg: "170px",
              },
              height: "36px",
              fontSize: {
                xs: "14px",
                sm: "15px",
                md: "18px",
                lg: "18px",
              },
              // background: "red",
              borderRadius: "4px",
              backgroundImage:
                "linear-gradient(to bottom right, #EE0034, #8000FF)",
              overflow: "hidden",
              padding: "2px",
              "&:hover": {
                backgroundImage:
                  "linear-gradient(to bottom right, #EE0034, #8000FF)",
                color: "#fff",
              },
            }}
          >
            <Typography
              sx={{
                width: "100%",
                height: "100%",
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundImage:
                    "linear-gradient(to bottom right, #EE0034, #8000FF)",
                  color: "#fff",
                  border: "none",
                },
                fontSize: {
                  xs: "14px",
                  sm: "15px",
                  md: "18px",
                  lg: "18px",
                },
              }}
            >
              Event Category{" "}
              {/* <span
                style={{
                  transform: "rotate(90deg)",
                  margin: "0.5rem",
                  // fontSize: "15px",
                }}
              >
                {">"}
              </span> */}
              <ArrowDropDownOutlined />
            </Typography>
          </Button>
        </Stack>
        <Stack
          spacing={2}
          sx={{
            margin: {
              xs: "1rem 0",
              sm: "1.3rem 0",
              md: "1.5rem 0",
              lg: "1.5rem 0",
            },
          }}
        >
          <SecondCards />
          <Stack>
            <Stack
              direction="row"
              sx={{
                margin: "1.5rem 0",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "start",
                  lg: "start",
                },
              }}
            >
              <Stack>
                <Typography
                  sx={{ fontSize: "30px", fontWeight: 500 }}
                  gutterBottom
                  variant="h2"
                  component="div"
                >
                  Trending{" "}
                </Typography>
                <img width={130} src={LineImg} alt="" />
              </Stack>
              <Typography
                sx={{ color: "#EE0034", fontSize: "30px", fontWeight: 500 }}
                gutterBottom
                variant="h2"
                component="span"
              >
                Events
              </Typography>
            </Stack>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                margin: {
                  xs: "0.4rem",
                  sm: "0.4rem",
                  md: "1rem",
                  lg: "1rem",
                },
                justifyContent: "center",
              }}
            >
              <Chip
                label="Wedding"
                variant="outlined"
                // onClick={handleClick}
                sx={{
                  padding: {
                    xs: "0rem",
                    sm: "0.6rem 0.5rem",
                    md: "1.2rem 1rem",
                    lg: "1.2rem 1rem",
                  },
                  border: "1px solid #b23e8b",
                  color: "#EE0034",
                }}
              />
              <Chip
                label="Birthday"
                variant="outlined"
                // onClick={handleClick}
                sx={{
                  padding: {
                    xs: "0rem",
                    sm: "0.6rem 0.5rem",
                    md: "1.2rem 1rem",
                    lg: "1.2rem 1rem",
                  },
                  border: "1px solid #b23e8b",
                  color: "#EE0034",
                }}
              />
              <Chip
                label="Burial"
                variant="outlined"
                // onClick={handleClick}
                sx={{
                  padding: {
                    xs: "0rem",
                    sm: "0.6rem 0.5rem",
                    md: "1.2rem 1rem",
                    lg: "1.2rem 1rem",
                  },
                  border: "1px solid #b23e8b",
                  color: "#EE0034",
                }}
              />
              <Chip
                label="Burial"
                variant="outlined"
                // onClick={handleClick}
                sx={{
                  padding: {
                    xs: "0rem",
                    sm: "0.6rem 0.5rem",
                    md: "1.2rem 1rem",
                    lg: "1.2rem 1rem",
                  },
                  border: "1px solid #b23e8b",
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
