import React, { useEffect, useState } from "react";
import { Card, CardDeck, Col, ListGroup, Row, Button, Jumbotron, Accordion } from "react-bootstrap";
import { Toast } from '../../components/alert';
import Search from "../../components/Search";
import UseFetch from "../../hooks/UseFetch";

const Home = () => {
  console.log('Negro culo ruto');
  const { state, getSuperHeroes } = UseFetch();
  const [alertMessage, setAlertMessage] = useState('')

  const [equipo, setEquipo] = useState([]);

  const agregarHeroeAEquipo = (hero) => {
    const resultadoValidacion = validarAgregar(hero);

    if (resultadoValidacion === "") {
      setEquipo([...equipo, hero]);
    } else {
      Toast.fire({
        icon: "error",
        title: resultadoValidacion
      })
    }
  }

  const validarAgregar = hero => {
    if (equipo.length >= 6) {
      return setAlertMessage('No puedes agregar más de 6 personajes')
    }
    if (equipo.find(({ id }) => id === hero.id)) {
      return setAlertMessage("Ya agregó al héroe al equipo")
    }
    if (equipo.filter(heroe => heroe.biography.alignment === "good").length === 4) {
      debugger
      return setAlertMessage("Solo puede haber 3 heroes con orientación buena")
    }
    if (equipo.filter(heroe => heroe.biography.alignment === "bad").length === 3) {
      debugger
      return setAlertMessage("Solo puede haber de 3 heroes con orientación mala")
    }
    return '';
  }

  const fireAlertMessage = () => {
    alertMessage.length &&
      Toast.fire({
        icon: 'error',
        title: alertMessage
      })
  };
  useEffect(fireAlertMessage, [alertMessage]);

  const sacarDelEquipo = (hero) => {
    const equipoFiltrado = equipo.filter(heroe => heroe.id !== hero.id);
    setEquipo(equipoFiltrado)
  }

  return (
    <Jumbotron>
      <h1 className="text-center">
        Eligé un Super Heroe
      </h1>
      <Row className="justify-content-center">
        <Col sm={3}>
          <Search getSuperHeroes={getSuperHeroes} />
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h3 className="text-center">
            Mi Equipo
          </h3>
          <Row>
            {
              equipo.map(hero => (
                <Col md={6} sm={3} key={hero.id}>
                  <CardDeck>
                    <Card>
                      <Card.Body>
                        <Card.Img variant="top" src={hero.image.url} />
                        <ListGroup variant="flush">
                          <Card.Title className="text-center" >{hero.name} </Card.Title>
                          <Card.Body>
                            Nombre: {hero.biography["full-name"]}
                          </Card.Body>
                          <Card.Title>
                            Stats
                          </Card.Title>
                          <ListGroup.Item>Inteligencia: {hero.powerstats.intelligence} </ListGroup.Item>
                          <ListGroup.Item>Fuerza: {hero.powerstats.strength} </ListGroup.Item>
                          <ListGroup.Item>Velocidad: {hero.powerstats.speed} </ListGroup.Item>
                          <ListGroup.Item>Durabilidad: {hero.powerstats.durability} </ListGroup.Item>
                          <ListGroup.Item>Poder: {hero.powerstats.power} </ListGroup.Item>
                          <ListGroup.Item>Combate: {hero.powerstats.combat} </ListGroup.Item>
                          <ListGroup.Item>
                            Condicion: {hero.biography.alignment}
                          </ListGroup.Item>
                        </ListGroup>
                        <Button variant="danger" className="text-right mt-4" onClick={() => sacarDelEquipo(hero)}>Sacar del Equipo</Button>
                      </Card.Body>
                    </Card>
                  </CardDeck>
                </Col>
              ))
            }
          </Row>
        </Col>
        <Col md={6} >
          <h3 className="text-center">
            Seleccion de personajes
          </h3>
          <Row className="justify-content-center">
            {
              state.map(hero =>
              (<Col md={6} sm={3} key={hero.id}>
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src={hero.image.url} />
                    <Card.Body>
                      <Card.Title className="text-center" >{hero.name} </Card.Title>
                      <ListGroup variant="flush">
                        <Card.Title>
                          Biografia
                        </Card.Title>
                        <ListGroup.Item>
                          Nombre: {hero.biography["full-name"]}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Alter Ego: {hero.biography["alter-egos"]}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Lugar de Nacimiento: {hero.biography["place-of-birth"]}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Primera Aparción: {hero.biography["first-appearance"]}
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Condicion: {hero.biography.alignment}
                        </ListGroup.Item>
                        <hr />
                      </ListGroup>
                      <ListGroup variant="flush">
                        <Card.Title>
                          Stats
                        </Card.Title>
                        <ListGroup.Item>Inteligencia: {hero.powerstats.intelligence} </ListGroup.Item>
                        <ListGroup.Item>Fuerza: {hero.powerstats.strength} </ListGroup.Item>
                        <ListGroup.Item>Velocidad: {hero.powerstats.speed} </ListGroup.Item>
                        <ListGroup.Item>Durabilidad: {hero.powerstats.durability} </ListGroup.Item>
                        <ListGroup.Item>Poder: {hero.powerstats.power} </ListGroup.Item>
                        <ListGroup.Item>Combate: {hero.powerstats.combat} </ListGroup.Item>
                      </ListGroup>
                      <Accordion>
                        <Accordion.Toggle as={Button} eventKey="0">
                          Ver más / Ver menos
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <div>
                            <hr />
                            <ListGroup variant="flush">
                              <Card.Title>
                                Caracteristicas
                              </Card.Title>
                              <ListGroup.Item>Genero: {hero.appearance.gender} </ListGroup.Item>
                              <ListGroup.Item>Raza: {hero.appearance.race} </ListGroup.Item>
                              <ListGroup.Item>Altura: {hero.appearance.height} </ListGroup.Item>
                              <ListGroup.Item>Peso: {hero.appearance.weight} </ListGroup.Item>
                              <ListGroup.Item>Color de pelo: {hero.appearance["hair-color"]}</ListGroup.Item>
                              <ListGroup.Item>Color de ojos: {hero.appearance["eye-color"]} </ListGroup.Item>
                            </ListGroup>
                            <hr />
                            <ListGroup variant="flush">
                              <Card.Title>
                                Conexiones
                              </Card.Title>
                              <ListGroup.Item>{hero.connections["group-affiliation"]} </ListGroup.Item>
                            </ListGroup>
                          </div>
                        </Accordion.Collapse>
                      </Accordion>
                      <Button variant="primary" className="text-right mt-4" onClick={() => agregarHeroeAEquipo(hero)}>Agregar al equipo</Button>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </Col>)
              )
            }
          </Row>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Home;
