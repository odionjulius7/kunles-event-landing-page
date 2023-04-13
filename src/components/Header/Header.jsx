import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Container, Stack } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import BgHeader from "../../img/union_1x.webp";
import BasicTooltip from "../BasicTooltips";
import Drawer1 from "../Drawer";

const TriangularStack = styled(Stack)({
  cursor: "pointer",
  color: "white",
  background: "white",
  width: "100%",
  height: "100%",
  padding: "0.2rem",
  outline: "15px solid white",
  position: "relative",
  "&::before": {
    content: "''",
    position: "absolute",
    top: "-20px",
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "20px solid transparent",
    borderRight: "20px solid transparent",
    borderBottom: "20px solid white",
  },
});

function Header() {
  return (
    <Stack
      sx={{
        background: `url(${BgHeader})`,
        backgroundSize: "cover",
        height: {
          xs: "476px",
          sm: "476px",
          md: "676px",
          lg: "800px",
          // xl: "776px",
        },

        maxMidth: "100%",
        // padding: "4rem",
        color: "white",
        position: "relative",
      }}
    >
      <Container
        sx={{
          padding: {
            xs: "0px",
            sm: "0px",
            md: "10px",
            lg: "10px",
          },
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "space-between",
            alignItems: "center",
            margin: {
              xs: "12px",
              sm: "12px",
              md: "2rem",
              lg: "2rem",
            },
          }}
        >
          <Typography
            variant="h4"
            component="h3"
            sx={{
              // margin: {
              //   xs: "0.2rem",
              //   sm: "0.1rem",
              //   md: "0",
              //   lg: "0",
              // },
              fontSize: {
                xs: "18px",
                sm: "22px",
                md: "28px",
                lg: "36px",
              },
            }}
          >
            MY EVENT
          </Typography>
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: {
                xs: "none",
                sm: "none",
                md: "flex",
                lg: "flex",
              },
            }}
          >
            <Typography
              variant="subtitle1"
              component="span"
              sx={{ fontSize: "17px" }}
            >
              Home
            </Typography>
            <Typography variant="subtitle1" component="span">
              <BasicTooltip
                text="Company"
                children={
                  <TriangularStack>
                    <Button sx={{ color: "#0F1022" }}>Affiliate Program</Button>
                    <Button sx={{ color: "#0F1022" }}>Agents</Button>
                    <Button sx={{ color: "#0F1022" }}>Help</Button>
                    <Button sx={{ color: "#0F1022" }}>Contact</Button>
                  </TriangularStack>
                }
              />
            </Typography>

            <Typography variant="subtitle1" component="span">
              <BasicTooltip
                text="User"
                children={
                  <TriangularStack>
                    <Button sx={{ color: "#0F1022" }}>Affiliate Program</Button>
                    <Button sx={{ color: "#0F1022" }}>Agents</Button>
                    <Button sx={{ color: "#0F1022" }}>Help</Button>
                    <Button sx={{ color: "#0F1022" }}>Contact</Button>
                  </TriangularStack>
                }
              />
            </Typography>
            <Typography variant="subtitle1" component="span">
              <BasicTooltip
                text="User"
                children={
                  <TriangularStack>
                    <Button sx={{ color: "#0F1022" }}>Affiliate Program</Button>
                    <Button sx={{ color: "#0F1022" }}>Agents</Button>
                    <Button sx={{ color: "#0F1022" }}>Help</Button>
                    <Button sx={{ color: "#0F1022" }}>Contact</Button>
                  </TriangularStack>
                }
              />
            </Typography>
            <Typography variant="subtitle1" component="span">
              About
            </Typography>
          </Stack>
          <Stack
            sx={{
              cursor: "pointer",
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
              },
            }}
          >
            <Drawer1 />
          </Stack>
        </Stack>
        <Stack
          sx={{
            margin: "2rem auto",
            width: {
              xs: "90%",
              sm: "90%",
              md: "80%",
              lg: "60%",
            },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            component="h3"
            sx={{
              margin: "5rem 0 2rem 0",
              fontWeight: 700,
              fontSize: {
                xs: "18px",
                sm: "30px",
                md: "40px",
                lg: "50px",
              },
            }}
          >
            "Unleash the Adventure A Night of Thrills and Entertainment"
          </Typography>
          <Typography
            variant="subtitle1"
            component="span"
            sx={{
              fontSize: {
                xs: "13px",
                sm: "14px",
                md: "18px",
                lg: "20px",
              },
              margin: "1rem 0",
            }}
          >
            "Don't miss out on the event of the year! Join us for an
            unforgettable evening of entertainment, networking and celebration
            at our annual gala.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={{
            xs: 6,
            sm: 8,
            md: 12,
            lg: 14,
          }}
          sx={{
            margin: "0 2rem",
            position: "absolute",
            // bottom: "0.8rem",
            bottom: {
              xs: "0.2rem",
              sm: "0.4rem",
              md: "0.8rem",
              lg: "0.8rem",
            },
            // left: "10%",
            left: {
              xs: "6%",
              sm: "7%",
              md: "10%",
              lg: "10%",
            },
            color: "#000000",
          }}
        >
          <Stack>
            <Typography
              sx={{
                color: "red",
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "22px",
                  lg: "24px",
                },
                fontWeight: 700,
              }}
            >
              23
            </Typography>
            <Typography
              sx={{ color: "red", fontSize: "14px", fontWeight: 500 }}
            >
              Day
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: "#e9b808",
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "22px",
                  lg: "24px",
                },
                fontWeight: 700,
              }}
            >
              18
            </Typography>
            <Typography
              sx={{ color: "#e9b808", fontSize: "14px", fontWeight: 500 }}
            >
              Hr
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: "green",
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "22px",
                  lg: "24px",
                },
                fontWeight: 700,
              }}
            >
              23
            </Typography>
            <Typography
              sx={{ color: "green", fontSize: "14px", fontWeight: 500 }}
            >
              Min
            </Typography>
          </Stack>
          <Stack>
            <Typography
              sx={{
                color: "purple",
                fontSize: {
                  xs: "18px",
                  sm: "20px",
                  md: "22px",
                  lg: "24px",
                },
                fontWeight: 700,
              }}
            >
              23
            </Typography>
            <Typography
              sx={{ color: "purple", fontSize: "14px", fontWeight: 500 }}
            >
              Sec
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}

export default Header;
