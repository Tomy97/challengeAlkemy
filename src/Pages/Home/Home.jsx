import React from "react";
import { Card, Col, Jumbotron, Row } from "react-bootstrap";
import Search from "../../components/Search";
// import UseFetch from "../../hooks/UseFetch";

const Home = () => {

  // const { state, getSuperHeroes } = UseFetch()
  return (
    <Jumbotron>
      <h1 className="text-center">
        Eligé un Super Heroe
      </h1>
      <Row className="justify-content-center">
        <Col sm={3}>
          <Search />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <h3 className="text-center">
            Mi Equipo
              </h3>

        </Col>
        <Col sm={12} >
          <h3 className="text-center">
            Seleccion de personajes
              </h3>

          <Row>
            <Col sm={12}>
              <Card>
                {/* <Card.Img variant="top" src={getSuperHeroes.image.url} /> */}
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Home;
