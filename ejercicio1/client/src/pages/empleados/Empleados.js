import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import BotonBorrar from "./BotonBorrar";
import { BotonEditar } from "./Editar";

const Empleados = ({ titulo }) => {
  const [empleados, setEmpleados] = useState([]);

  const updateEmpleados = () => {
    axios
      .get("http://localhost:8080/empleados")
      .then((response) => setEmpleados(response.data))
      .catch(console.log);
  };

  useEffect(updateEmpleados, []);

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>{titulo}</h1>
      <Listado empleados={empleados} updateEmpleados={updateEmpleados} />
    </Container>
  );
};

const Listado = ({ empleados, updateEmpleados }) => {
  return (
    <div>
      <Table striped className="w-auto align-middle">
        <thead className="table-primary">
          <tr>
            <th scope="col">Legajo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Cargo</th>
            <th scope="col">Sucursal</th>
            <th scope="col">Ant.</th>
            <th />
            <th />
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {empleados.map((empleado) => (
            <tr>
              <th scope="row">{empleado.legajo}</th>
              <td>{empleado.nombreEmpleado}</td>
              <td>{empleado.apellidoEmpleado}</td>
              <td>{empleado.cargo}</td>
              <td>{empleado.sucursal}</td>
              <td>{empleado.antiguedadAnios}</td>
              <td>
                <BotonEditar
                  legajo={empleado.legajo}
                />
              </td>
              <td>
                <BotonBorrar
                  legajo={empleado.legajo}
                  updateEmpleados={updateEmpleados}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {empleados.length != 0 || (
        <Alert variant="warning">No se encontraron empleados</Alert>
      )}
      <Link to="/empleados/nuevo">
        <Button>Nuevo</Button>
      </Link>
    </div>
  );
};

export default Empleados;
