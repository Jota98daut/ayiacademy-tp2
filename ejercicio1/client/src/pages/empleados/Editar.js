import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const EditarEmpleado = () => {
  const { legajo } = useParams();
  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState({
    legajo: 0,
    nombreEmpleado: "",
    apellidoEmpleado: "",
    cargo: "",
    sucursal: "",
    antiguedadAnios: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/empleados/${legajo}`)
      .then((response) => setEmpleado(response.data))
      .catch((error) => console.log("error", error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setEmpleado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("http://localhost:8080/empleados", empleado)
      .then(navigate("/empleados"))
      .catch(console.log);
  };

  return (
    <Container>
      <h1>Editar empleado</h1>
      <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            type="number"
            placeholder="legajo"
            name="legajo"
            value={empleado.legajo}
            onChange={handleInputChange}
            disabled
          />
        </InputGroup>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="nombre"
            name="nombreEmpleado"
            value={empleado.nombreEmpleado}
            onChange={handleInputChange}
          />
          <Form.Control
            type="text"
            placeholder="apellido"
            name="apellidoEmpleado"
            value={empleado.apellidoEmpleado}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="cargo"
            name="cargo"
            value={empleado.cargo}
            onChange={handleInputChange}
          />
          <Form.Control
            type="text"
            placeholder="sucursal"
            name="sucursal"
            value={empleado.sucursal}
            onChange={handleInputChange}
          />
          <Form.Control
            type="number"
            placeholder="antigüedad"
            name="antiguedadAnios"
            value={empleado.antiguedadAnios}
            onChange={handleInputChange}
          />
        </InputGroup>
        <InputGroup>
          <Button type="submit">Agregar</Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              navigate("/empleados");
            }}
          >
            Volver
          </Button>
        </InputGroup>
      </Form>
    </Container>
  );
};

const BotonEditar = ({ legajo }) => {
  const navigate = useNavigate();

  return (
    <Button
      variant="outline-primary"
      className="bi bi-pen-fill"
      onClick={() => navigate(`/empleados/editar/${legajo}`)}
    />
  );
};

export default EditarEmpleado;
export { BotonEditar };
