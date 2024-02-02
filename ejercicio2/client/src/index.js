import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import {
  createBrowserRouter, Navigate, RouterProvider,
} from "react-router-dom";
import Listado from "./pages/Listado";
import EditarProducto from "./pages/productos/Editar";
import NuevoProducto from "./pages/productos/Nuevo";
import NuevoCliente from "./pages/clientes/Nuevo";
import EditarCliente from "./pages/clientes/Editar";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([{
  path: "/", element: <Navigate to="/login"/>,
}, {
  path: "/login", element: <Login/>,
}, {
  path: "/listado", element: <Listado tituloProductos="Listado de Productos" tituloClientes="Listado de Clientes"/>,
}, {
  path: "/productos/nuevo", element: <NuevoProducto/>,
}, {
  path: "/productos/editar/:idProducto", element: <EditarProducto/>,
}, {
  path: "/clientes/nuevo", element: <NuevoCliente/>,
}, {
  path: "/clientes/editar/:idCliente", element: <EditarCliente/>,
},]);

root.render(<React.StrictMode>
  <RouterProvider router={router}/>
</React.StrictMode>,);
