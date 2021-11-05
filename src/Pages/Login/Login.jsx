import React, { useEffect, useState } from "react";
import { Card, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import data from '../../data.json'
import "./Login.css";
import { Toast } from "../../components/alert";

const FormularioLogin = () => {
  let history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [alertMessage, setAlertMessage] = useState('');
  const [, setHasLogin] = useState(false);


  const onSubmitForm = (event) => {
    event.preventDefault();
    handleLogin()
  };

  const validators = () => {
    // validar el email y contraseña ingresados correspondan a alguno de los de data, si es igual ej: 'challenge@alkemy.org'
    // me vuelva true y en caso de que no false
    const userEmail = data.users.filter(u => u.email === credentials.email)[0];

    console.log(userEmail);
    if (credentials.email === '' || credentials.password === '') {
      setAlertMessage('Ingrese los datos por favor.');
      return false;
    }
    else if (credentials.email !== userEmail.email) {
      setAlertMessage('El email ingresado es invalido.');
      return false;
    }
    else if (credentials.password !== userEmail.password) {
      setAlertMessage('Contraseña incorrecta.');
      return false;
    }
    return true;
  };


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
      history.push("/home");
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
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><i className="fas fa-envelope"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="email"
                      placeholder="Ingrese su email"
                      name="email"
                      onChange={(event) => setCredentials({ ...credentials, email: event.target.value })} value={credentials.email}
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup>
                    <InputGroup.Prepend>
                      <InputGroup.Text><i className="fas fa-key"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                      type="password"
                      placeholder="Ingrese su contraseña"
                      onChange={(event) => setCredentials({ ...credentials, password: event.target.value })} value={credentials.password}
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
    </>
  );
};

export default FormularioLogin;
