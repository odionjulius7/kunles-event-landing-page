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
    <Card
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: "95%",
          lg: "95%",
        },
        marginLeft: {
          xs: "0.7rem",
          sm: "0.7rem",
          md: "0",
          lg: "0",
        },
        boxShadow: "0px 10px 60px rgba(103, 34, 181, 0.08)",
      }}
    >
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
              <Typography
                color="#6722B5"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                }}
              >
                Graphic Design Hacks: Five Steps to Follow
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                  },
                }}
              >
                Sep 16 2022, 3 comments
              </Typography>
            }
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
              <Typography
                color="#6722B5"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                }}
              >
                Graphic Design Hacks: Five Steps to Follow
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                  },
                }}
              >
                Sep 16 2022, 3 comments
              </Typography>
            }
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
              <Typography
                color="#6722B5"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                }}
              >
                Graphic Design Hacks: Five Steps to Follow
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                  },
                }}
              >
                Sep 16 2022, 3 comments
              </Typography>
            }
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
              <Typography
                color="#6722B5"
                sx={{
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                }}
              >
                Graphic Design Hacks: Five Steps to Follow
              </Typography>
            }
            secondary={
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    sm: "13px",
                    md: "14px",
                    lg: "14px",
                  },
                }}
              >
                Sep 16 2022, 3 comments
              </Typography>
            }
          />
        </ListItem>
      </List>
    </Card>
  );
};
