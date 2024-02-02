import axios from "axios";
import {useEffect, useState} from "react";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";

const EditarCliente = () => {
  const {idCliente} = useParams();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState({
    idCliente: 0, nombre: "", apellido: "", fechaIngreso: "", domicilio: "", telefono: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/clientes/${idCliente}`)
      .then((response) => setCliente(response.data))
      .catch((error) => console.log("error", error));
  }, []);

  const handleInputChange = (event) => {
    const {name, value} = event.target;

    setCliente((prevState) => ({
      ...prevState, [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("http://localhost:8080/clientes", cliente)
      .then(() => navigate("/listado"))
      .catch(console.log);
  };

  return (<Container className="d-flex flex-column align-items-center">
    <h1>Editar cliente</h1>
    <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="number"
          placeholder="ID"
          name="idCliente"
          value={cliente.idCliente}
          onChange={handleInputChange}
          disabled
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="nombre"
          name="nombre"
          value={cliente.nombre}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          placeholder="apellido"
          name="apellido"
          value={cliente.apellido}
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          type="date"
          placeholder="fecha de ingreso"
          name="fechaIngreso"
          value={cliente.fechaIngreso}
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="domicilio"
          name="domicilio"
          value={cliente.domicilio}
          onChange={handleInputChange}
        /><Form.Control
        type="tel"
        placeholder="telefono"
        name="telefono"
        value={cliente.telefono}
        onChange={handleInputChange}
      />
      </InputGroup>
      <InputGroup>
        <Button type="submit">Editar</Button>
        <Button
          variant="outline-primary"
          onClick={() => {
            navigate("/listado");
          }}
        >
          Volver
        </Button>
      </InputGroup>
    </Form>
  </Container>);
};

const BotonEditar = ({idCliente}) => {
  const navigate = useNavigate();

  return (<Button
    variant="outline-primary"
    className="bi bi-pen-fill"
    onClick={() => navigate(`/clientes/editar/${idCliente}`)}
  />);
};

export default EditarCliente;
export {BotonEditar};
