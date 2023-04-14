import React from "react";
import BigAvatar from "../img/big.png";

import Map from "../img/map.png";
import Tag from "../img/tag.png";

import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { fontWeight } from "@mui/system";
import { CardMedia, Stack } from "@mui/material";

const CardUserImg = () => {
  return (
    <List>
      <ListItem sx={{ margin: "0.6rem 0" }}>
        <ListItemAvatar>
          <Avatar
            alt="Profile Picture"
            src={BigAvatar}
            sx={{
              width: {
                xs: "60px",
                sm: "40px",
                md: "40px",
                lg: "40px",
              },
              height: {
                xs: "60px",
                sm: "40px",
                md: "40px",
                lg: "40px",
              },
            }}
          />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <Stack
              direction={{
                xs: "column",
                sm: "row",
                md: "row",
                lg: "row",
              }}
              spacing={1}
              sx={{
                fontSize: {
                  xs: "11px",
                  sm: "13px",
                  md: "15px",
                  lg: "15px",
                },
                fontWeight: 500,
                alignItems: {
                  xs: "start",
                  sm: "center",
                  md: "center",
                  lg: "center",
                },
                marginLeft: {
                  xs: "10px",
                  sm: "0px",
                  md: "0px",
                  lg: "0px",
                },
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: {
                    xs: "11px",
                    sm: "13px",
                    md: "15px",
                    lg: "15px",
                  },
                  fontWeight: {
                    xs: 400,
                    sm: 300,
                    md: 300,
                    lg: 300,
                  },
                  color: "#000000",
                }}
              >
                Oluwatobiloba Durodola
              </Typography>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <CardMedia
                  component="img"
                  image={Map}
                  alt="green iguana"
                  sx={{
                    height: {
                      xs: "11px",
                      sm: "12px",
                      md: "13px",
                      lg: "13px",
                    },
                    width: {
                      xs: "11px",
                      sm: "12px",
                      md: "13px",
                      lg: "13px",
                    },
                    transition: "all 0.3s ease",
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "13px",
                      md: "15px",
                      lg: "15px",
                    },
                    fontWeight: 300,
                  }}
                >
                  Sep 16, 2022
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
                <CardMedia
                  component="img"
                  image={Tag}
                  alt="green iguana"
                  sx={{
                    height: {
                      xs: "11px",
                      sm: "12px",
                      md: "13px",
                      lg: "13px",
                    },
                    width: {
                      xs: "11px",
                      sm: "12px",
                      md: "13px",
                      lg: "13px",
                    },
                    transition: "all 0.3s ease",
                  }}
                />
                <Typography
                  // color="#6722B5"
                  component="span"
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "12px",
                      md: "13px",
                      lg: "13px",
                    },
                    fontWeight: 400,
                  }}
                >
                  Tag
                </Typography>
                <Typography
                  color="#6722B5"
                  component="span"
                  sx={{
                    fontSize: {
                      xs: "11px",
                      sm: "12px",
                      md: "13px",
                      lg: "13px",
                    },
                    fontWeight: 400,
                    cursor: "pointer",
                  }}
                >
                  Web Development
                </Typography>
              </Stack>
            </Stack>
          }
        />
      </ListItem>
    </List>
  );
};

export default CardUserImg;
