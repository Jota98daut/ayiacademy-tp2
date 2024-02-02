import axios from "axios";
import { Button } from "react-bootstrap";

const BotonBorrar = ({ idProducto, updateProductos }) => {
  const handleBorrar = () => {
    axios
      .delete(`http://localhost:8080/productos/${idProducto}`)
      .then(updateProductos)
      .catch(console.log);
  };

  return (
    <Button
      variant="outline-danger"
      className="bi bi-trash-fill"
      onClick={handleBorrar}
    ></Button>
  );
};

export default BotonBorrar;
