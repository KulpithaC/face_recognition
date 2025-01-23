import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        backgroundColor: theme.palette.grey[100],
        textAlign: "center",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Built with React and Material-UI for learning purposes
      </Typography>
    </Box>
  );
}

export default Footer;
