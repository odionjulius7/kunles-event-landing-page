import {
  Button,
  FormGroup,
  Input,
  Stack,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";

const FormEvent = () => {
  return (
    <Stack
      sx={{
        // height: "400px",
        margin: "5rem 0 7rem 0",
        alignItems: "center",
      }}
    >
      <Card
        sx={{
          width: "70%",
          padding: "30px",
        }}
      >
        <Stack style={{ textAlign: "center" }}>
          <Stack
            direction="row"
            spacing={3}
            sx={{ width: "100%", margin: "1rem 0" }}
          >
            <Stack sx={{ textAlign: "start", width: "100%" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "21px",
                  margin: "0.3rem 0.1rem",
                }}
              >
                First name
              </label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Type here..."
              />
            </Stack>
            <Stack sx={{ textAlign: "start", width: "100%" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "21px",
                  margin: "0.3rem 0.1rem",
                }}
              >
                Last name
              </label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Type here..."
              />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            spacing={3}
            sx={{ width: "100%", margin: "1rem 0" }}
          >
            <Stack sx={{ textAlign: "start", width: "100%" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "21px",
                  margin: "0.3rem 0.1rem",
                }}
              >
                Email
              </label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Type here..."
              />
            </Stack>
            <Stack sx={{ textAlign: "start", width: "100%" }}>
              <label
                style={{
                  fontSize: "14px",
                  fontWeight: 400,
                  lineHeight: "21px",
                  margin: "0.3rem 0.1rem",
                }}
              >
                Phone number
              </label>
              <TextField
                id="outlined-basic"
                variant="outlined"
                placeholder="Type here..."
              />
            </Stack>
          </Stack>
          <Stack sx={{ width: "100%" }}>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Type here..."
              style={{
                width: "100%",
                height: "200px",
                border: " 0.5px solid rgba(0, 0, 0, 0.4)",
                borderRadius: "5px",
                padding: "10px",
              }}
            />
          </Stack>
        </Stack>
        <Button
          variant="contained"
          size="small"
          color="primary"
          sx={{
            backgroundImage:
              "linear-gradient(to bottom right, #EE0034, #8000FF)",
            padding: "10px, 30px, 10px, 30px",
            height: "40px",
            width: "120px",
            fontSize: "18px",
            fontWeight: 500,
            textTransform: "capitalize",
            margin: "2rem 0",
          }}
        >
          Send
        </Button>
      </Card>
    </Stack>
  );
};

export default FormEvent;

{
  /* <TextareaAutosize
aria-label="empty textarea"
placeholder="Empty"
style={{ width: 200 }}
/> */
}
