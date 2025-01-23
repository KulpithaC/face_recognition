import React from "react";
import AppTheme from "./AppTheme";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

function App() {
  return (
    <AppTheme>
      <RouterProvider router={router} />
    </AppTheme>
  );
}

export default App;
