import React from "react";
import Success from "./Success.jsx";
import App from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import GetReport from "./GetReport.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/admin",
    element: <GetReport />,
  },
]);

export default function Layout() {
  return <RouterProvider router={router} />;
}
