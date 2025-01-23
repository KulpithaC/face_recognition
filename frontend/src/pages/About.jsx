import React from "react";
import { Box, Typography } from "@mui/material";

function About() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
        About Us
      </Typography>
      <Typography variant="h6" color="text.secondary">
        Welcome to the About Page. This is a demo of smooth navigation and
        visually appealing buttons.
      </Typography>
    </Box>
  );
}

export default About;
