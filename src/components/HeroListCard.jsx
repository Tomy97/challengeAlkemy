import React from "react";
import propTypes from "prop-types";
import { Card, ListGroup, Accordion, Button } from "react-bootstrap";

const HeroListCard = ({
  hero,
  onAddHero,
  onRemoveHero,
  isInMyTeam,
  disabledConditional,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={hero.image.url} />
      <Card.Body>
        <Card.Title className="text-center">{hero.name}</Card.Title>
        <ListGroup variant="flush">
          <Card.Title>Biografia</Card.Title>
          <ListGroup.Item>Nombre: {hero.biography["full-name"]}</ListGroup.Item>
          <ListGroup.Item>
            Alter Ego: {hero.biography["alter-egos"]}
          </ListGroup.Item>
          <ListGroup.Item>
            Lugar de Nacimiento:
            {hero.biography["place-of-birth"]}
          </ListGroup.Item>
          <ListGroup.Item>
            Primera Aparción: {hero.biography["first-appearance"]}
          </ListGroup.Item>
          <ListGroup.Item>
            Condicion:{" "}
            <span
              className={
                hero.biography.alignment === "good"
                  ? "text-success"
                  : "text-danger"
              }
            >
              {hero.biography.alignment === "good" ? "Heroe" : "Villano"}
            </span>
          </ListGroup.Item>
          <hr />
        </ListGroup>
        <ListGroup variant="flush">
          <Card.Title>Stats</Card.Title>
          <ListGroup.Item>
            Inteligencia: {hero.powerstats.intelligence}
          </ListGroup.Item>
          <ListGroup.Item>Fuerza: {hero.powerstats.strength}</ListGroup.Item>
          <ListGroup.Item>Velocidad: {hero.powerstats.speed}</ListGroup.Item>
          <ListGroup.Item>
            Durabilidad: {hero.powerstats.durability}
          </ListGroup.Item>
          <ListGroup.Item>Poder: {hero.powerstats.power}</ListGroup.Item>
          <ListGroup.Item>Combate: {hero.powerstats.combat}</ListGroup.Item>
        </ListGroup>
        <Accordion>
          <Accordion.Toggle as={Button} eventKey="0">
            Ver más / Ver menos
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <div>
              <hr />
              <ListGroup variant="flush">
                <Card.Title>Caracteristicas</Card.Title>
                <ListGroup.Item>
                  Genero: {hero.appearance.gender}
                </ListGroup.Item>
                <ListGroup.Item>Raza: {hero.appearance.race}</ListGroup.Item>
                <ListGroup.Item>
                  Altura: {hero.appearance.height}
                </ListGroup.Item>
                <ListGroup.Item>Peso: {hero.appearance.weight}</ListGroup.Item>
                <ListGroup.Item>
                  Color de pelo: {hero.appearance["hair-color"]}
                </ListGroup.Item>
                <ListGroup.Item>
                  Color de ojos: {hero.appearance["eye-color"]}
                </ListGroup.Item>
              </ListGroup>
              <hr />
              <ListGroup variant="flush">
                <Card.Title>Conexiones</Card.Title>
                <ListGroup.Item>
                  {hero.connections["group-affiliation"]}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Accordion.Collapse>
        </Accordion>
        {isInMyTeam ? (
          <Button
            variant="danger"
            className="text-right mt-4"
            onClick={() => onRemoveHero(hero)}
          >
            Sacar del Equipo
          </Button>
        ) : (
          <Button
            disabled={disabledConditional}
            variant="primary"
            className="text-right mt-4"
            onClick={() => onAddHero(hero)}
          >
            Agregar al equipo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

HeroListCard.propTypes = {
  hero: propTypes.object.isRequired,
  onAddHero: propTypes.func.isRequired,
  onRemoveHero: propTypes.func.isRequired,
  isInMyTeam: propTypes.bool,
  disabledConditional: propTypes.bool,
};
export default HeroListCard;
