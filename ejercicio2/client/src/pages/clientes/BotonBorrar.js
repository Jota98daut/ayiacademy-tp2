import axios from "axios";
import { Button } from "react-bootstrap";

const BotonBorrar = ({ idCliente, updateClientes }) => {
  const handleBorrar = () => {
    axios
      .delete(`http://localhost:8080/clientes/${idCliente}`)
      .then(updateClientes)
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
