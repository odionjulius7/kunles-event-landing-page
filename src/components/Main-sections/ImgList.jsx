import React from "react";
// Image List

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
// import FolderIcon from "@mui/icons-material/Folder";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";

import OtherImg from "../../img/other.png";
import LeafImg from "../../img/leafGroup.png";
import RoundedImg from "../../img/roundimage.png";
import SquareImg from "../../img/squareBoxes.png";
import TriangleLikeImg from "../../img/triangleLike.png";

import Typography from "@mui/material/Typography";

function ImgList() {
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Stack sx={{ margin: "5rem 0 1rem 0" }}>
      <Stack sx={{ margin: "1rem 0", textAlign: "center" }}>
        <Typography
          sx={{ fontSize: "48px", fontWeight: 600 }}
          gutterBottom
          variant="h2"
          component="div"
        >
          Our{" "}
          <Typography
            sx={{ color: "#EE0034", fontSize: "48px", fontWeight: 600 }}
            gutterBottom
            variant="h2"
            component="span"
          >
            Sponsors
          </Typography>
        </Typography>
      </Stack>
      <BottomNavigation
        sx={{ width: "100%" }}
        value={value}
        //   onChange={handleChange}
      >
        <BottomNavigationAction
          //   label="Recents"
          //   value="recents"
          label="Favorites"
          value="favorites"
          icon={
            <Avatar
              alt="Remy Sharp"
              src={SquareImg}
              sx={{ borderRadius: "2px" }}
            />
          }
        />
        <BottomNavigationAction
          //   label="Recents"
          //   value="recents"
          label="Favorites"
          value="favorites"
          icon={
            <Avatar
              alt="Remy Sharp"
              src={RoundedImg}
              sx={{ borderRadius: "2px" }}
            />
          }
        />
        <BottomNavigationAction
          label="Favorites"
          value="favorites"
          icon={
            <Avatar
              alt="Remy Sharp"
              src={LeafImg}
              sx={{ borderRadius: "2px" }}
            />
          }
        />
        <BottomNavigationAction
          label="Nearby"
          value="nearby"
          icon={
            <Avatar
              alt="Remy Sharp"
              src={TriangleLikeImg}
              sx={{ borderRadius: "2px" }}
            />
          }
        />
        <BottomNavigationAction
          label="Folder"
          value="folder"
          icon={
            <Avatar
              alt="Remy Sharp"
              src={OtherImg}
              sx={{ borderRadius: "2px" }}
            />
          }
          // icon={<img s src={ImgAvatar} />}
        />
      </BottomNavigation>
    </Stack>
  );
}

export default ImgList;
