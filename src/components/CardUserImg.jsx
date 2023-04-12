import React from "react";
import BigAvatar from "../img/big.png";

import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { fontWeight } from "@mui/system";

const CardUserImg = () => {
  return (
    <List sx={{}}>
      <ListItem sx={{ margin: "1rem 0" }}>
        <ListItemAvatar>
          <Avatar alt="Profile Picture" src={BigAvatar} />
        </ListItemAvatar>
        <ListItemText
          //   primary={

          //   }
          secondary={
            <Typography sx={{ fontSize: "15px", fontWeight: 500 }}>
              Oluwatobiloba Durodola{" "}
              <Typography
                component="span"
                sx={{ fontSize: "15px", fontWeight: 300 }}
              >
                Sep 16, 2022
              </Typography>{" "}
              <Typography
                color="#6722B5"
                component="span"
                sx={{ fontSize: "13px", fontWeight: 400 }}
              >
                Tag Web Development
              </Typography>
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
};

export default CardUserImg;
