import axios from "axios";
import { useState } from "react";
import { Alert, Button, Container, Form, InputGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NuevoEmpleado = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [failureMsg, setFailureMsg] = useState("");

  return (
    <Container className="d-flex flex-column align-items-center">
      <h1>Nuevo empleado</h1>
      <FormEmpleado
        setShowSuccess={setShowSuccess}
        setFailureMsg={setFailureMsg}
      />
      {showSuccess && <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>Empleado agregado</Alert>}
      {failureMsg && <Alert variant="danger" dismissible onClose={() => setFailureMsg("")}>{failureMsg}</Alert>}
    </Container>
  );
};

const FormEmpleado = ({ setShowSuccess, setFailureMsg }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    legajo: 0,
    nombreEmpleado: "",
    apellidoEmpleado: "",
    cargo: "",
    sucursal: "",
    antiguedadAnios: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/empleados", formData)
      .then(() => setShowSuccess(true))
      .catch((error) => setFailureMsg(error.response.data));
  };

  return (
    <Form className="w-50 d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="number"
          placeholder="legajo"
          name="legajo"
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="nombre"
          name="nombreEmpleado"
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          placeholder="apellido"
          name="apellidoEmpleado"
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="cargo"
          name="cargo"
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          placeholder="sucursal"
          name="sucursal"
          onChange={handleInputChange}
        />
        <Form.Control
          type="number"
          placeholder="antigüedad"
          name="antiguedadAnios"
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup>
        <Button type="submit">Agregar</Button>
        <Button variant="outline-primary" onClick={() => {navigate("/empleados")}}>Volver</Button>
      </InputGroup>
    </Form>
  );
};

export default NuevoEmpleado;
