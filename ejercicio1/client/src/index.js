import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import Empleados from "./pages/empleados/Empleados";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NuevoEmpleado from "./pages/empleados/Nuevo";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/empleados",
    element: <Empleados titulo="Listado de Empleados" />,
  },
  {
    path: "/empleados/nuevo",
    element: <NuevoEmpleado />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
