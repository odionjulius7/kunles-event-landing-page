import { Container, Stack } from "@mui/system";
import React from "react";
import AboutEvent from "../AboutEvent";
import Contact from "../Contact";
import FAQSetcion from "../FAQSetcion";
import Footer from "../Footer/Footer";
import FormEvent from "../FormEvent";
import JustBg from "../JustBg";
import MemberShip from "../MemberShip";
import NewsLetter from "../NewsLetter";
import ReUsableComps from "../ReUsableComps";
import ImgList from "./ImgList";
import UpcomingEventCards from "./UpcomingEventCards";

function Main() {
  return (
    <>
      <Container
        sx={{
          width: "100%",
          maxWidth: {
            xs: "97%",
            sm: "97%",
            md: "95%",
            lg: "90%",
          },
        }}
      >
        <Stack>
          <ImgList />
          <UpcomingEventCards />
        </Stack>
      </Container>
      <Stack>
        <JustBg />
      </Stack>
      <Stack>
        <Container
          sx={{
            width: "100%",
            maxWidth: {
              xs: "97%",
              sm: "97%",
              md: "95%",
              lg: "90%",
            },
          }}
        >
          <MemberShip />
        </Container>
      </Stack>
      <Stack
        sx={{
          background: "#FFB339",
          minWidth: "100%",
          // height: "576px",
        }}
      >
        <AboutEvent />
      </Stack>
      <Container
        sx={{
          width: "100%",
        }}
      >
        <Contact />
      </Container>
      <Container
        sx={{
          width: "100%",
        }}
      >
        <FormEvent />
      </Container>
      <Stack>
        <NewsLetter />
      </Stack>
      <Container
        sx={{
          width: "100%",
        }}
      >
        <FAQSetcion />
      </Container>
      {/* <Stack>
        <ReUsableComps />
      </Stack> */}
    </>
  );
}

export default Main;
