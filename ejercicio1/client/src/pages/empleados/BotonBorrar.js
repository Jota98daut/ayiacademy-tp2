import axios from "axios";
import { Button } from "react-bootstrap";

const BotonBorrar = ({ legajo, updateEmpleados }) => {
  const handleBorrar = () => {
    axios
      .delete(`http://localhost:8080/empleados/${legajo}`)
      .then(updateEmpleados)
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
