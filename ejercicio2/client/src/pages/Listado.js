import axios from "axios";
import {useEffect, useState} from "react";
import {Alert, Button, Container, Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {BotonEditar as BotonEditarProducto} from "./productos/Editar";
import BotonBorrarProducto from "./productos/BotonBorrar";
import {BotonEditar as BotonEditarCliente} from "./clientes/Editar";
import BotonBorrarCliente from "./clientes/BotonBorrar";

const Listado = ({tituloProductos, tituloClientes}) => {
  const [productos, setProductos] = useState([]);
  const [clientes, setClientes] = useState([]);

  const updateProductos = () => {
    axios
      .get("http://localhost:8080/productos")
      .then((response) => setProductos(response.data))
      .catch(console.log);
  };

  const updateClientes = () => {
    axios
      .get("http://localhost:8080/clientes")
      .then((response) => setClientes(response.data))
      .catch(console.log);
  };

  useEffect(() => {
    updateProductos();
    updateClientes();
  }, []);

  return (<Container className="d-flex flex-column align-items-center">
    <h1>{tituloProductos}</h1>
    <ListadoProductos productos={productos} updateProductos={updateProductos}/>

    <h1>{tituloClientes}</h1>
    <ListadoClientes clientes={clientes} updateClientes={updateClientes}/>
  </Container>);
};

const ListadoProductos = ({productos, updateProductos}) => {
  return (<div>
    <Table striped className="w-auto align-middle">
      <thead className="table-primary">
      <tr>
        <th scope="col">PLU</th>
        <th scope="col">EAN</th>
        <th scope="col">Nombre</th>
        <th scope="col">Descripción</th>
        <th scope="col">Tipo</th>
        <th scope="col">Marca</th>
        <th scope="col">$</th>
        <th scope="col">Precio</th>
        <th/>
        <th/>
      </tr>
      </thead>
      <tbody className="table-group-divider">
      {productos.map((producto) => (<tr>
        <th scope="row">{producto.idProducto}</th>
        <td>{producto.codigoEan}</td>
        <td>{producto.nombreProducto}</td>
        <td>{producto.descripcionProducto}</td>
        <td>{producto.tipo}</td>
        <td>{producto.marca}</td>
        <td>{producto.precio}</td>
        <td>{producto.stock}</td>
        <td>
          <BotonEditarProducto
            idProducto={producto.idProducto}
          />
        </td>
        <td>
          <BotonBorrarProducto
            idProducto={producto.idProducto}
            updateProductos={updateProductos}
          />
        </td>
      </tr>))}
      </tbody>
    </Table>
    {productos.length !== 0 || (<Alert variant="warning">No se encontraron productos</Alert>)}
    <Link to="/productos/nuevo">
      <Button>Nuevo</Button>
    </Link>
  </div>);
};

const ListadoClientes = ({clientes, updateClientes}) => {
  return (<div>
    <Table striped className="w-auto align-middle">
      <thead className="table-primary">
      <tr>
        <th scope="col">ID</th>
        <th scope="col">Nombre</th>
        <th scope="col">Apellido</th>
        <th scope="col">F. Ingreso</th>
        <th scope="col">Domicilio</th>
        <th scope="col">Teléfono</th>
        <th/>
        <th/>
      </tr>
      </thead>
      <tbody className="table-group-divider">
      {clientes.map((cliente) => (<tr>
        <th scope="row">{cliente.idCliente}</th>
        <td>{cliente.nombre}</td>
        <td>{cliente.apellido}</td>
        <td>{cliente.fechaIngreso}</td>
        <td>{cliente.domicilio}</td>
        <td>{cliente.telefono}</td>
        <td>
          <BotonEditarCliente
            idCliente={cliente.idCliente}
          />
        </td>
        <td>
          <BotonBorrarCliente
            idCliente={cliente.idCliente}
            updateClientes={updateClientes}
          />
        </td>
      </tr>))}
      </tbody>
    </Table>
    {clientes.length !== 0 || (<Alert variant="warning">No se encontraron clientes</Alert>)}
    <Link to="/clientes/nuevo">
      <Button>Nuevo</Button>
    </Link>
  </div>);
};

export default Listado;
