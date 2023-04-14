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
    <Stack
      sx={{
        margin: {
          xs: "3rem 0 1rem 0",
          sm: "3rem 0 1rem 0",
          md: "3rem 0 1rem 0",
          lg: "3rem 0 1rem 0",
        },
      }}
    >
      <Stack sx={{ margin: "1rem 0", gap: "0px", textAlign: "center" }}>
        <Typography
          sx={{
            fontSize: {
              xs: "30px",
              sm: "38px",
              md: "42px",
              lg: "48px",
            },
            fontWeight: 600,
          }}
          gutterBottom
          variant="h2"
          component="div"
        >
          Our{" "}
          <Typography
            sx={{
              color: "#EE0034",
              fontSize: {
                xs: "30px",
                sm: "38px",
                md: "42px",
                lg: "48px",
              },
              fontWeight: 600,
            }}
            gutterBottom
            variant="h2"
            component="span"
          >
            Sponsors
          </Typography>
        </Typography>
      </Stack>
      <BottomNavigation
        sx={{
          gap: {
            xs: "2.2rem",
            sm: "4.5rem",
            md: "6.5rem",
            lg: "8.5rem",
          },
          alignItems: "center",
          width: {
            xs: "50%",
            sm: "50%",
            md: "60%",
            lg: "70%",
          },
          // width: "80%",
          margin: "0px auto",
        }}
        value={value}
        //   onChange={handleChange}
      >
        <Avatar
          alt="Remy Sharp"
          src={SquareImg}
          sx={{
            borderRadius: "2px",
            padding: "0px",
            margin: "0px",
            width: {
              xs: "30px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
            height: {
              xs: "30px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
          }}
        />

        <Avatar
          alt="Remy Sharp"
          src={RoundedImg}
          sx={{
            borderRadius: "2px",
            width: {
              xs: "30px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
            height: {
              xs: "30px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
          }}
        />

        <Avatar
          alt="Remy Sharp"
          src={LeafImg}
          sx={{
            borderRadius: "2px",
            width: {
              xs: "40px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
            height: {
              xs: "40px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
          }}
        />

        <Avatar
          alt="Remy Sharp"
          src={TriangleLikeImg}
          sx={{
            borderRadius: "2px",
            width: {
              xs: "40px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
            height: {
              xs: "40px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
          }}
        />

        <Avatar
          alt="Remy Sharp"
          src={OtherImg}
          sx={{
            borderRadius: "2px",
            width: {
              xs: "40px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
            height: {
              xs: "40px",
              sm: "40px",
              md: "50px",
              lg: "50px",
            },
          }}
        />
      </BottomNavigation>
    </Stack>
  );
}

export default ImgList;
