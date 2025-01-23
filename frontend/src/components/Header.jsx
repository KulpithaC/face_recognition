import React from "react";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import FaceIcon from "@mui/icons-material/Face";

function Navbar() {
  return (
    <AppBar position="fixed" color="default" elevation={1}>
      <Toolbar>
        <Box display="flex" alignItems="center" flexGrow={1}>
          <FaceIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div">
            FaceCheck
          </Typography>
        </Box>
        <Box>
          <Button component={Link} to="/" sx={{ mx: 1 }} color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" sx={{ mx: 1 }} color="inherit">
            About
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
