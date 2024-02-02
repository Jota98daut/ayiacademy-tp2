import axios from "axios";
import {useState} from "react";
import {Alert, Button, Container, Form, InputGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const NuevoCliente = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [failureMsg, setFailureMsg] = useState("");

  return (<Container className="d-flex flex-column align-items-center">
    <h1>Nuevo cliente</h1>
    <FormCliente
      setShowSuccess={setShowSuccess}
      setFailureMsg={setFailureMsg}
    />
    {showSuccess &&
      <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>Cliente agregado</Alert>}
    {failureMsg && <Alert variant="danger" dismissible onClose={() => setFailureMsg("")}>{failureMsg}</Alert>}
  </Container>);
};

const FormCliente = ({setShowSuccess, setFailureMsg}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idCliente: 0, nombre: "", apellido: "", fechaIngreso: "", domicilio: "", telefono: "",
  });

  const handleInputChange = (event) => {
    const {name, value} = event.target;

    setFormData((prevState) => ({
      ...prevState, [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/clientes", formData)
      .then(() => setShowSuccess(true))
      .catch((error) => setFailureMsg(error.response.data));
  };

  return (<Form className="w-50 d-flex flex-column gap-3" onSubmit={handleSubmit}>
    <InputGroup>
      <Form.Control
        type="number"
        placeholder="ID"
        name="idCliente"
        value={formData.idCliente}
        onChange={handleInputChange}
      />
    </InputGroup>
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={handleInputChange}
      />
      <Form.Control
        type="text"
        placeholder="apellido"
        name="apellido"
        value={formData.apellido}
        onChange={handleInputChange}
      />
    </InputGroup>
    <InputGroup>
      <Form.Control
        type="date"
        placeholder="fecha de ingreso"
        name="fechaIngreso"
        value={formData.fechaIngreso}
        onChange={handleInputChange}
      />
    </InputGroup>
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="domicilio"
        name="domicilio"
        value={formData.domicilio}
        onChange={handleInputChange}
      /><Form.Control
      type="tel"
      placeholder="telefono"
      name="telefono"
      value={formData.telefono}
      onChange={handleInputChange}
    />
    </InputGroup>
    <InputGroup>
      <Button type="submit">Agregar</Button>
      <Button
        variant="outline-primary"
        onClick={() => {
          navigate("/listado");
        }}
      >
        Volver
      </Button>
    </InputGroup>
  </Form>);
};

export default NuevoCliente;
