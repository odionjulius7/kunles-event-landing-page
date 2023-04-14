import React from "react";
import { Footer, Header, Main } from "../components";
import { Stack } from "@mui/material";
function Home() {
  return (
    <Stack sx={{ width: "100%", overflow: "hidden" }} className="home">
      <Header />
      <Main />
      <Footer />
    </Stack>
  );
}

export default Home;
