import React from "react";
import propTypes from "prop-types";
import { CardDeck, Col, Row } from "react-bootstrap";
import HeroListCard from "./HeroListCard";

const HeroList = ({
  heroes,
  isInMyTeam,
  onAddHero,
  onRemoveHero,
  disabledConditional,
}) => {
  return (
    <Row className="justify-content-center">
      {heroes.map((hero) => (
        <Col md={6} sm={3} key={hero.id}>
          <CardDeck>
            <HeroListCard
              hero={hero}
              isInMyTeam={isInMyTeam}
              onAddHero={onAddHero}
              onRemoveHero={onRemoveHero}
              disabledConditional={disabledConditional}
            />
          </CardDeck>
        </Col>
      ))}
    </Row>
  );
};

HeroList.propTypes = {
  heroes: propTypes.array.isRequired,
  isInMyTeam: propTypes.bool,
  onAddHero: propTypes.func.isRequired,
  onRemoveHero: propTypes.func.isRequired,
  disabledConditional: propTypes.bool,
};

export default HeroList;
