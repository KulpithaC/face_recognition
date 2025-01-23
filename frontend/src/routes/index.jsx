// src/routes.js
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import FaceCheck from "../FaceCheck";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/face-check",
        element: (
          <PrivateRoute>
            <FaceCheck />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
