import axios from "axios";
import {useState} from "react";
import {Alert, Button, Container, Form, InputGroup} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const NuevoProducto = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [failureMsg, setFailureMsg] = useState("");

  return (<Container className="d-flex flex-column align-items-center">
    <h1>Nuevo producto</h1>
    <FormProducto
      setShowSuccess={setShowSuccess}
      setFailureMsg={setFailureMsg}
    />
    {showSuccess &&
      <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>Producto agregado</Alert>}
    {failureMsg && <Alert variant="danger" dismissible onClose={() => setFailureMsg("")}>{failureMsg}</Alert>}
  </Container>);
};

const FormProducto = ({setShowSuccess, setFailureMsg}) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    idProducto: 0, codigoEan: "", nombreProducto: "", descripcionProducto: "", tipo: "", marca: "", precio: 0, stock: 0,
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
      .post("http://localhost:8080/productos", formData)
      .then(() => setShowSuccess(true))
      .catch((error) => setFailureMsg(error.response.data));
  };

  return (<Form className="w-50 d-flex flex-column gap-3" onSubmit={handleSubmit}>
    <InputGroup>
      <Form.Control
        type="number"
        placeholder="PLU"
        name="idProducto"
        value={formData.idProducto}
        onChange={handleInputChange}
      />
      <Form.Control
        type="text"
        placeholder="EAN"
        name="codigoEan"
        value={formData.codigoEan}
        onChange={handleInputChange}
      />
    </InputGroup>
    <InputGroup>
      <Form.Control
        as="textarea"
        placeholder="descripcion"
        name="descripcionProducto"
        value={formData.descripcionProducto}
        onChange={handleInputChange}
      />
    </InputGroup>
    <InputGroup>
      <Form.Control
        type="text"
        placeholder="tipo"
        name="tipo"
        value={formData.tipo}
        onChange={handleInputChange}
      />
      <Form.Control
        type="text"
        placeholder="marca"
        name="marca"
        value={formData.marca}
        onChange={handleInputChange}
      />
    </InputGroup>
    <InputGroup>
      <Form.Control
        type="number"
        placeholder="precio"
        name="precio"
        value={formData.precio}
        step={0.01}
        onChange={handleInputChange}
      />
      <Form.Control
        type="number"
        placeholder="stock"
        name="stock"
        value={formData.stock}
        step={1}
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

export default NuevoProducto;
