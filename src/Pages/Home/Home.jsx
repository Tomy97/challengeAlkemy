import React, { useEffect, useState } from "react";
import { Card, CardDeck, Col, ListGroup, Row, Button, Jumbotron, Accordion } from "react-bootstrap";
import { Toast } from '../../components/alert';
import Search from "../../components/Search";
import UseFetch from "../../hooks/UseFetch";

const Home = () => {
  const { state, getSuperHeroes } = UseFetch();

  const [equipo, setEquipo] = useState([]);
  const [totalCombat, setTotalCombat] = useState(0.0);
  const [totalDurability, setTotalDurability] = useState(0.0);
  const [totalIntelligence, setTotalIntelligence] = useState(0.0);
  const [totalPower, setTotalPower] = useState(0.0);
  const [totalSpeed, setTotalSpeed] = useState(0.0);
  const [totalStrength, setTotalStrength] = useState(0.0);
  const [promedioPeso, setpromedioPeso] = useState(0.0);
  const [promedioAltura, setpromedioAltura] = useState(0.0);
  const [mayorStat, setMayorStat] = useState("");

  const validarAgregar = hero => {
    if (equipo.length === 6) {
      return "No puede agregar más de 6 miembros al equipo";
    }

    if (equipo.find(heroe => heroe.id === hero.id)) {
      return "Ya agregó al héroe al equipo";
    }

    if (equipo.filter(heroe => heroe.biography.alignment === "good").length === 3) {
      return "No puede haber más de 3 heroes con orientación buena";
    }

    if (equipo.filter(heroe => heroe.biography.alignment === "bad").length === 3) {
      return "No puede haber más de 3 heroes con orientación mala";
    }

    return "";
  }

  useEffect(() => {
    let powerstats = {
      combat: 0,
      durability: 0,
      intelligence: 0,
      power: 0,
      speed: 0,
      strength: 0,
    }
    let peso = 0.0
    let altura = 0.0

    equipo.forEach(hero => {
      if (hero.appearance.weight[1]) { //peso en kg
        const pesoHero = parseFloat(hero.appearance.weight[1].replace(" kg", ""));
        peso = peso + pesoHero;
      }
      if (hero.appearance.height[1]) { //altura en cm
        const alturaHero = parseFloat(hero.appearance.height[1].replace(" cm", ""));
        altura = altura + alturaHero;
      }
      Object.keys(hero.powerstats).forEach(key => {
        if (hero.powerstats[key] !== "null") {
          powerstats[key] = powerstats[key] + parseInt(hero.powerstats[key]);
        }
      });
    });

    setTotalCombat((powerstats.combat));
    setTotalDurability((powerstats.durability));
    setTotalIntelligence((powerstats.intelligence));
    setTotalPower((powerstats.power));
    setTotalSpeed((powerstats.speed));
    setTotalStrength((powerstats.strength));

    //ordeno las stats de mayor a menor



    const statsOrdenadas = Object.entries(powerstats).sort((a, b) => b[1] - a[1]);
    if (statsOrdenadas[0][1] !== 0) {
      // seteo la primera si es distinto de 0
      setMayorStat(statsOrdenadas[0][0]);
    }

    if (peso !== 0) {
      setpromedioPeso((peso / equipo.length).toFixed(2));
    }
    if (altura !== 0) {
      setpromedioAltura((altura / equipo.length).toFixed(2));
    }
  }, [equipo]);

  const agregarHeroeAEquipo = (hero) => {
    const resultadoValidacion = validarAgregar(hero);

    if (resultadoValidacion === "") {
      const copiaDeEquipo = [...equipo];
      copiaDeEquipo.push(hero);
      setEquipo(copiaDeEquipo);
      // calcularEstadisticas();
    } else {
      Toast.fire({
        icon: "error",
        title: resultadoValidacion
      })
    }
  }
  const sacarDelEquipo = (hero) => {
    const equipoFiltrado = equipo.filter(heroe => heroe.id !== hero.id);
    setEquipo(equipoFiltrado)
    // calcularEstadisticas();
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
            <Col>
              <p>Mayor Stat: {mayorStat}</p>
              <p>Altura promedio: {promedioAltura} cm</p>
              <p>Peso promedio: {promedioPeso} kg</p>
              <p>Total Combat: {totalCombat}</p>
              <p>Total Intelligence: {totalIntelligence}</p>
              <p>Total Durability: {totalDurability}</p>
              <p>Total Power: {totalPower}</p>
              <p>Total Strength: {totalStrength}</p>
              <p>Total Speed: {totalSpeed}</p>
            </Col>
          </Row>
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
                          Ver mas
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
