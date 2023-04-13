import { Divider, Stack } from "@mui/material";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// Card

import { Button, CardActionArea, CardActions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
// import Typography from '@mui/material/Typography';
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";

// List
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from '@mui/material/Avatar';
// import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

// Local import
import ImgAvatar from "../img/BG.png";
import ImgList from "./Main-sections/ImgList";
import Drawer1 from "./Drawer";

function ReUsableComps() {
  //
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  //
  const theme = useTheme();
  return (
    <Stack sx={{ margin: "3rem" }}>
      <Drawer1 />
      <Button
        sx={{
          position: "relative",
          padding: "10px 20px",
          background: "#fff",
          margin: "5px",
          borderRadius: "5px",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            margin: "-5px",
            borderRadius: "inherit",
            backgroundImage: "linear-gradient(45deg, purple, orange)",
          },
        }}
      >
        edit
      </Button>

      <Stack>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
          <Typography variant="h1" gutterBottom>
            h1. Heading
          </Typography>
          <Typography variant="h2" gutterBottom>
            h2. Heading
          </Typography>
          <Typography variant="h3" gutterBottom>
            h3. Heading
          </Typography>
        </Box>
      </Stack>
      <Stack direction="row" spacing={1} sx={{ margin: "1rem" }}>
        <Chip label="Clickable" onClick={handleClick} />
        <Chip label="Clickable" variant="outlined" onClick={handleClick} />
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <Stack direction="row" spacing={2} sx={{ margin: "1rem" }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <Stack spacing={2} sx={{ margin: "1rem" }}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem>
            <ListItemAvatar
              sx={{
                "& .css-2s90m6-MuiAvatar-root": {
                  borderRadius: "5px",
                  width: "50px",
                  height: "50px",
                  fontFamily: "poppins",
                },
              }}
            >
              <Avatar>
                <img src={ImgAvatar} alt="" />
                {/* <ImageIcon /> */}
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <WorkIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <BeachAccessIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <h4>Card Side Image</h4>
      <Stack>
        <Card sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={ImgAvatar}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                Live From Space
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
            </CardContent>
            <Box sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === "rtl" ? (
                  <SkipNextIcon />
                ) : (
                  <SkipPreviousIcon />
                )}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === "rtl" ? (
                  <SkipPreviousIcon />
                ) : (
                  <SkipNextIcon />
                )}
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <h4>Card Top Image</h4>
      <Stack>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={ImgAvatar}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
          </CardActions>
        </Card>
      </Stack>
      <Divider sx={{ margin: "1rem 0" }} />
      <h4>Image Side By Side</h4>
      <ImgList />
    </Stack>
  );
}

export default ReUsableComps;
