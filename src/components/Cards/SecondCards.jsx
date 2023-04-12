import React from "react";
import BigAvatar from "../../img/big.png";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export const SecondCards = () => {
  return (
    <Card sx={{ width: "95%" }}>
      {" "}
      <List sx={{ width: "100%", bgcolor: "background.paper" }}>
        <ListItem sx={{ margin: "0.4rem 0" }}>
          <ListItemAvatar>
            <Avatar
              sx={{
                borderRadius: "5px",
                width: "65px",
                height: "55px",
                marginRight: "1rem",
              }}
              alt="Profile Picture"
              src={BigAvatar}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="#6722B5">
                Graphic Design Hacks: Five Steps to Follow
              </Typography>
            }
            secondary={"Sep 16 2022, 3 comments"}
          />
        </ListItem>
        <ListItem sx={{ margin: "0.4rem 0" }}>
          <ListItemAvatar>
            <Avatar
              sx={{
                borderRadius: "5px",
                width: "65px",
                height: "55px",
                marginRight: "1rem",
              }}
              alt="Profile Picture"
              src={BigAvatar}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="#6722B5">
                Becoming a Successful Blogger In Tech
              </Typography>
            }
            secondary={"Sep 15 2022, 3 comments"}
          />
        </ListItem>
        <ListItem sx={{ margin: "0.4rem 0" }}>
          <ListItemAvatar>
            <Avatar
              sx={{
                borderRadius: "5px",
                width: "65px",
                height: "55px",
                marginRight: "1rem",
              }}
              alt="Profile Picture"
              src={BigAvatar}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="#6722B5">
                Tech Movies to Watch for Inspiration
              </Typography>
            }
            secondary={"Sep 14 2022, 3 comments"}
          />
        </ListItem>
        <ListItem sx={{ margin: "0.4rem 0" }}>
          <ListItemAvatar>
            <Avatar
              sx={{
                borderRadius: "5px",
                width: "65px",
                height: "55px",
                marginRight: "1rem",
              }}
              alt="Profile Picture"
              src={BigAvatar}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <Typography color="#6722B5">
                Digital Evolution in Nigeria
              </Typography>
            }
            secondary={"Sep 16 2022, 3 comments"}
          />
        </ListItem>
      </List>
    </Card>
  );
};
