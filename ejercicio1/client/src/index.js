import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import Empleados from "./pages/empleados/Empleados";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import NuevoEmpleado from "./pages/empleados/Nuevo";
import EditarEmpleado from "./pages/empleados/Editar";

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
  {
    path: "/empleados/editar/:legajo",
    element: <EditarEmpleado />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
