import { Alert, Container, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import { useState } from "react";

const Login = () => {
  const [showError, setShowError] = useState(true);

  return (
    <Container>
      <h1>Log In</h1>

      <Form className="d-flex flex-column gap-3">
        <Form.Control type="text" placeholder="usuario" />
        <Form.Control type="password" placeholder="contraseña" />
        <Form.Control
          type="submit"
          value="Log In"
          className="btn btn-primary"
        />

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
