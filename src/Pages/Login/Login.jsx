import React, { useEffect, useState } from "react";
import {
  Card,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  Container,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import data from "../../data.json";
import "./Login.css";
import { useAlert } from "../../hooks/UseAlert";

const FormularioLogin = () => {
  let history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [alertMessage, setAlertMessage] = useState("");
  const [, setHasLogin] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    handleLogin();
  };

  const validators = () => {
    const userEmail = data.users.filter(
      (u) => u.email === credentials.email
    )[0];

    if (credentials.email === "" || credentials.password === "") {
      setAlertMessage("Ingrese los datos por favor.");
      return false;
    } else if (credentials.email !== userEmail.email) {
      setAlertMessage("El email ingresado es invalido.");
      return false;
    } else if (credentials.password !== userEmail.password) {
      setAlertMessage("Contraseña incorrecta.");
      return false;
    }
    return true;
  };

  const checkCurrentSession = () => {
    if (localStorage.getItem("loggedUser")) {
      setHasLogin(true);
    } else {
      setHasLogin(false);
    }
  };
  useEffect(checkCurrentSession, []);

  const fireAlertMessage = () => {
    alertMessage.length &&
      useAlert.fire({
        icon: "error",
        title: alertMessage,
      });
  };
  useEffect(fireAlertMessage, [alertMessage]);

  const handleLogin = () => {
    const isUser = validators();
    if (isUser) {
      setHasLogin(true);
      useAlert.fire({
        icon: "success",
        title: `Bienvendio a la seleccion de Super Heroes`,
      });
      localStorage.setItem("loggedUser", JSON.stringify(credentials.email));
      history.push("/home");
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col md={12} className="text-center">
          <h2>
            Para poder ingresar al sitio, por favor ingrese su email y
            contraseña.
          </h2>
          <p>Los usuarios con los que se pueden igresar son:</p>
          <ul>
            {data.users.map((user, i) => (
              <li key={i}>
                <strong>Email:</strong> {user.email} -{" "}
                <strong>Contraseña:</strong> {user.password}
              </li>
            ))}
          </ul>
        </Col>
        <Col md={12} className="my-5">
          <Row className="justify-content-center align-items-center ">
            <Col md={3}>
              <Card>
                <Card.Body>
                  <Form onSubmit={onSubmitForm}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <i className="fas fa-envelope"></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="email"
                          placeholder="Ingrese su email"
                          name="email"
                          onChange={(event) =>
                            setCredentials({
                              ...credentials,
                              email: event.target.value,
                            })
                          }
                          value={credentials.email}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>
                            <i className="fas fa-key"></i>
                          </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          type="password"
                          placeholder="Ingrese su contraseña"
                          onChange={(event) =>
                            setCredentials({
                              ...credentials,
                              password: event.target.value,
                            })
                          }
                          value={credentials.password}
                        />
                      </InputGroup>
                    </Form.Group>
                    <Row>
                      <Col xs={5} />
                      <Button
                        className="btn-lg btn-block"
                        id="handleSubmit"
                        type="submit"
                        variant="primary"
                        onClick={onSubmitForm}
                      >
                        Iniciar Sesión
                      </Button>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default FormularioLogin;
