import { Alert, Button, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { useState } from "react";
import axios from "axios";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [showError, setShowError] = useState(false);
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [passwordUsuario, setPasswordUsuario] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios

      .post("http://localhost:8080/login", {
        nombreUsuario,
        passwordUsuario,
      })

      .then(navigate("/empleados"))

      .catch((error) => {
        console.log(error);
        setShowError(true);
      });
  };

  return (
    <Container>
      <h1>Log In</h1>

      <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          placeholder="usuario"
          onChange={({ target: { value } }) => setNombreUsuario(value)}
        />

        <Form.Control
          type="password"
          placeholder="contraseña"
          onChange={({ target: { value } }) => setPasswordUsuario(value)}
        />

        <Button type="submit">Log In</Button>

        {showError && (
          <Alert
            variant="danger"
            dismissible
            onClose={() => setShowError(false)}
          >
            Usuario o contraseña inválidos
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default Login;
