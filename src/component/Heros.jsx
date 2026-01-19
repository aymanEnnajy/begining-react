import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function HeroSection() {
  return (
    <Box
      sx={{
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #020617)",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4} textAlign={{ xs: "center", md: "left" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              lineHeight: 1.2,
            }}
          >
            Build Modern Web Apps
            <br />
            With React & MUI
          </Typography>

          <Typography
            variant="h6"
            sx={{
              color: "gray.300",
              maxWidth: 600,
            }}
          >
            Create fast, responsive and professional user interfaces using
            React and Material UI. Perfect for dashboards, portfolios and web
            applications.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent={{ xs: "center", md: "flex-start" }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "#38bdf8",
                color: "#020617",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "#0ea5e9",
                },
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "white",
                color: "white",
                "&:hover": {
                  borderColor: "#38bdf8",
                  color: "#38bdf8",
                },
              }}
            >
              Learn More
            </Button>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
