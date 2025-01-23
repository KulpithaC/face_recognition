import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Header";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <Box>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Box>
  );
};

export default Layout;
