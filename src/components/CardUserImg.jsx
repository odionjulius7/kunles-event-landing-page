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
          <Avatar alt="Profile Picture" src={BigAvatar} />
        </ListItemAvatar>
        <ListItemText
          secondary={
            <Stack
              direction="row"
              spacing={1}
              sx={{ fontSize: "15px", fontWeight: 500, alignItems: "center" }}
            >
              <Typography
                component="span"
                sx={{ fontSize: "15px", fontWeight: 300 }}
              >
                Oluwatobiloba Durodola
              </Typography>
              <CardMedia
                component="img"
                image={Map}
                alt="green iguana"
                sx={{
                  height: "13px",
                  width: "13px",
                  transition: "all 0.3s ease",
                }}
              />
              <Typography
                component="span"
                sx={{ fontSize: "15px", fontWeight: 300 }}
              >
                Sep 16, 2022
              </Typography>{" "}
              <CardMedia
                component="img"
                image={Tag}
                alt="green iguana"
                sx={{
                  height: "13px",
                  width: "13px",
                  transition: "all 0.3s ease",
                }}
              />
              <Typography
                // color="#6722B5"
                component="span"
                sx={{ fontSize: "13px", fontWeight: 400 }}
              >
                Tag
              </Typography>
              <Typography
                color="#6722B5"
                component="span"
                sx={{ fontSize: "13px", fontWeight: 400 }}
              ></Typography>{" "}
              Web Development
            </Stack>
          }
        />
      </ListItem>
    </List>
  );
};

export default CardUserImg;
