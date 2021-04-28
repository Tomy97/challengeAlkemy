import React, { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { BrowserRouter as Route } from "react-router-dom";
import { Toast } from '../../components/alert';
import data from '../../data.json'
import "./FormularioLogin.css";
import Home from "../Home/Home";
const FormularioLogin = () => {

  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [alertMessage, setAlertMessage] = useState('');
  const [hasLogin, setHasLogin] = useState(false);
  const [showSingleStore, setShowSingleStore] = useState(false);


  const users = data.users;
  const onSubmitForm = (event) => {
    event.preventDefault();
    handleLogin()
  };

  const validators = () => {
    const registeredUserNames = users.map((user) => user.email);
    const currentUserObj = users.filter((user) => user.email)[0];

    if (credentials.email === '' || credentials.password === '') {
      setAlertMessage('Ingrese los datos por favor.');
      return false;
    } else if (!registeredUserNames.includes(credentials.email)) {
      setAlertMessage('El email ingresado es invalido.');
      return false;
    } else if (credentials.password !== currentUserObj.password) {
      setAlertMessage('Contraseña incorrecta.');
      return false;
    }
    return currentUserObj;
  };
  console.log(credentials);


  const checkCurrentSession = () => {
    if (localStorage.getItem('loggedUser')) {
      setHasLogin(true);
    } else {
      setHasLogin(false);
    }
  };
  useEffect(checkCurrentSession, []);

  const fireAlertMessage = () => {
    alertMessage.length &&
      Toast.fire({
        icon: 'error',
        title: alertMessage
      })
  };
  useEffect(fireAlertMessage, [alertMessage]);

  const handleLogin = () => {
    const isUser = validators();
    if (isUser) {
      setHasLogin(true);
      Toast.fire({
        icon: 'success',
        title: `Bienvendio a la seleccion de Super Heroes`
      })
      localStorage.setItem('loggedUser', JSON.stringify(credentials.email));
      <Route component={Home} path="../Home/Home" ></Route>
    }
  };

  return (
    <>
      <Row className='justify-content-center'>
        <Col xs={3} md={3}>
          <Card className="shadow-box-example hoverable">
            <Card.Body>
              <Form onSubmit={onSubmitForm}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Ingrese su email"
                    name="email"
                    onChange={(event) => setCredentials({ ...credentials, email: event.target.value })} value={credentials.email}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Ingrese su contraseña"
                    onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} value={credentials.password}
                  />
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
    </>
  );
};

export default FormularioLogin;
