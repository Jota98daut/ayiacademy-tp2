import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login"/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
]);

root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
);
