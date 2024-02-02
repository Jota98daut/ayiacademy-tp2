import axios from "axios";
import {useEffect, useState} from "react";
import {Button, Container, Form, InputGroup} from "react-bootstrap";
import {useNavigate, useParams} from "react-router-dom";

const EditarProducto = () => {
  const {idProducto} = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    idProducto: 0, codigoEan: "", nombreProducto: "", descripcionProducto: "", tipo: "", marca: "", precio: 0, stock: 0,
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/productos/${idProducto}`)
      .then((response) => setProducto(response.data))
      .catch((error) => console.log("error", error));
  }, []);

  const handleInputChange = (event) => {
    const {name, value} = event.target;

    setProducto((prevState) => ({
      ...prevState, [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put("http://localhost:8080/productos", producto)
      .then(() => navigate("/listado"))
      .catch(console.log);
  };

  return (<Container className="d-flex flex-column align-items-center">
    <h1>Editar producto</h1>
    <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
      <InputGroup>
        <Form.Control
          type="number"
          placeholder="PLU"
          name="idProducto"
          value={producto.idProducto}
          onChange={handleInputChange}
          disabled
        />
        <Form.Control
          type="text"
          placeholder="EAN"
          name="codigoEan"
          value={producto.codigoEan}
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          as="textarea"
          placeholder="descripcion"
          name="descripcionProducto"
          value={producto.descripcionProducto}
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          type="text"
          placeholder="tipo"
          name="tipo"
          value={producto.tipo}
          onChange={handleInputChange}
        />
        <Form.Control
          type="text"
          placeholder="marca"
          name="marca"
          value={producto.marca}
          onChange={handleInputChange}
        />
      </InputGroup>
      <InputGroup>
        <Form.Control
          type="number"
          placeholder="precio"
          name="precio"
          value={producto.precio}
          step={0.01}
          onChange={handleInputChange}
        />
        <Form.Control
          type="number"
          placeholder="stock"
          name="stock"
          value={producto.stock}
          step={1}
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

const BotonEditar = ({idProducto}) => {
  const navigate = useNavigate();

  return (<Button
    variant="outline-primary"
    className="bi bi-pen-fill"
    onClick={() => navigate(`/productos/editar/${idProducto}`)}
  />);
};

export default EditarProducto;
export {BotonEditar};
