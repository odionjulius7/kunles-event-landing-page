import { Stack } from "@mui/system";
import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import { useTheme } from "@mui/material/styles";

// Local import
import ImgAvatar from "../img/man.png";
import QuotationImg from "../img/questionMark.png";

const MemberShip = () => {
  // const [selectedValue, setSelectedValue] = React.useState("a");
  // const handleChange = (event) => {
  //   setSelectedValue(event.target.value);
  // };
  // const theme = useTheme();
  return (
    <Stack
      sx={{
        margin: {
          xs: "1.5rem 0 1.4rem 0",
          sm: "2.5rem 0 2.1rem 0",
          md: "4.5rem 0 3.4rem 0",
          lg: "4.5rem 0 3.4rem 0",
        },
      }}
    >
      <Stack
        sx={{
          margin: {
            xs: "1rem 0 1rem 0",
            sm: "1rem 0 1rem 0",
            md: "2rem 0 3rem 0",
            lg: "2rem 0 3rem 0",
          },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "24px",
              sm: "34px",
              md: "48px",
              lg: "48px",
            },
            fontWeight: 600,
          }}
          gutterBottom
          variant="h2"
          component="div"
        >
          What Members{" "}
          <Typography
            sx={{
              color: "#EE0034",
              fontSize: {
                xs: "24px",
                sm: "34px",
                md: "48px",
                lg: "48px",
              },
              fontWeight: 600,
            }}
            gutterBottom
            variant="h2"
            component="span"
          >
            are saying
          </Typography>
        </Typography>
      </Stack>
      <Stack direction={{ xs: "column", sm: "column", md: "row" }} spacing={3}>
        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            width: "100%",
            padding: "10px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", sm: "100%", md: "45%", lg: "45%" },
              height: { xs: "300px", sm: "350px", md: "350px", lg: "350px" },
            }}
            image={ImgAvatar}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <img
                src={QuotationImg}
                alt=""
                width={45}
                style={{ margin: "0.6rem 0" }}
              />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{
                  fontWeight: 400,
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                }}
              >
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort. Oyetech is exactly what our business has been lacking."
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
                fontSize: {
                  xs: "16px",
                  sm: "17px",
                  md: "20px",
                  lg: "20px",
                },
                fontWeight: 600,
              }}
            >
              Gloria Rose
            </Box>
          </Box>
        </Card>
        {/* Second */}

        <Card
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            width: "100%",
            padding: "10px",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: { xs: "100%", sm: "100%", md: "45%", lg: "45%" },
              height: { xs: "300px", sm: "350px", md: "350px", lg: "350px" },
            }}
            image={ImgAvatar}
            alt="Live from space album cover"
          />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <img
                src={QuotationImg}
                alt=""
                width={45}
                style={{ margin: "0.6rem 0" }}
              />
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
                sx={{
                  fontWeight: 400,
                  fontSize: {
                    xs: "14px",
                    sm: "15px",
                    md: "16px",
                    lg: "16px",
                  },
                }}
              >
                "Thank you so much for your help. It's exactly what I've been
                looking for. You won't regret it. It really saves me time and
                effort. Oyetech is exactly what our business has been lacking."
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                pl: 1,
                pb: 1,
                fontSize: {
                  xs: "16px",
                  sm: "17px",
                  md: "20px",
                  lg: "20px",
                },
                fontWeight: 600,
              }}
            >
              Gloria Rose
            </Box>
          </Box>
        </Card>
      </Stack>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          margin: {
            xs: "2rem 0",
            sm: "3rem 0",
            md: "4rem 0",
            lg: "4rem 0",
          },
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#EE0034",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "rgba(217, 217, 217, 0.5)",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "rgba(217, 217, 217, 0.5)",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "rgba(217, 217, 217, 0.5)",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
          }}
        ></div>
      </Stack>
    </Stack>
  );
};

export default MemberShip;
