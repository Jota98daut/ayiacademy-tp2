import axios from "axios";
import { useEffect, useState } from "react";
import { Alert, Container, Table } from "react-bootstrap";

const Empleados = ({ titulo }) => {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/empleados")
      .then((response) => setEmpleados(response.data))
      .catch(console.log);
  }, []);

  return (
    <Container>
      <h1>{titulo}</h1>
      <Table striped>
        <thead className="table-primary">
          <tr>
            <th scope="col">Legajo</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Cargo</th>
            <th scope="col">Sucursal</th>
            <th scope="col">Ant.</th>
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
            </tr>
          ))}
        </tbody>
      </Table>
      {empleados.length != 0 || (
        <Alert variant="warning">No se encontraron empleados</Alert>
      )}
    </Container>
  );
};

export default Empleados;
