import {Alert, Button, Container, Form} from "react-bootstrap";
import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Login = () => {
  const [showError, setShowError] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios

      .post("http://localhost:8080/login", {
        nombreUsuario, passwordUsuario,
      })

      .then(navigate("/listado"))

      .catch((error) => {
        console.log(error);
        setShowError(true);
      });
  };

  return (<Container className="d-flex flex-column align-items-center">
    <h1>Log In</h1>

    <Form className="d-flex flex-column gap-3" style={{width: "350px"}} onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="usuario"
        onChange={({target: {value}}) => setNombreUsuario(value)}
      />

      <Form.Control
        type="password"
        placeholder="contraseña"
        onChange={({target: {value}}) => setPasswordUsuario(value)}
      />

      <Button type="submit">Log In</Button>

      {showError && (<Alert
        variant="danger"
        dismissible
        onClose={() => setShowError(false)}
      >
        Usuario o contraseña inválidos
      </Alert>)}
    </Form>
  </Container>);
};

export default Login;
