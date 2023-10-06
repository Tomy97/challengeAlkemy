import { useState } from "react";
import { Col, Row, Jumbotron } from "react-bootstrap";
import { useAlert } from "../../hooks/UseAlert";
import Search from "../../components/Search";
import UseFetch from "../../hooks/UseFetch";
import HeroList from "../../components/HeroList";
import { useTeamValidatorMessages } from "../../hooks/UseTeamValidatorMessages";

const useAddHeroToMyTeam = () => {
  const [myTeam, setMyTeam] = useState([]);
  const [isMyTeam, setIsMyTeam] = useState(false);
  const { state, getSuperHeroes } = UseFetch();

  const addHeroToMyTeam = (hero) => {
    // const validationResult = useTeamValidatorMessages(hero, myTeam);
    // if (validationResult === "") {
    //   setIsMyTeam(true);
    //   setMyTeam([...myTeam, hero]);
    // } else {
    //   useAlert.fire({
    //     icon: "error",
    //     title: validationResult,
    //   });
    // }
  };

  const deleteFromMyTeam = (hero) => {
    const myTeamFiltered = myTeam.filter((heroe) => heroe.id !== hero.id);
    setMyTeam(myTeamFiltered);
  };

  return {
    state,
    getSuperHeroes,
    myTeam,
    isMyTeam,
    addHeroToMyTeam,
    deleteFromMyTeam,
  };
};

const Home = () => {
  const {
    state,
    getSuperHeroes,
    myTeam,
    isMyTeam,
    addHeroToMyTeam,
    deleteFromMyTeam,
  } = useAddHeroToMyTeam();

  return (
    <Jumbotron className="mb-0">
      <h1 className="text-center">Eligé un Super Heroe</h1>
      <Row className="justify-content-center">
        <Col md={6} lg={3}>
          <Search getSuperHeroes={getSuperHeroes} />
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <h3 className="text-center">Mi Equipo</h3>
          <HeroList
            heroes={myTeam}
            isInMyTeam={isMyTeam}
            onAddHero={addHeroToMyTeam}
            onRemoveHero={deleteFromMyTeam}
          />
        </Col>
        <Col lg={6}>
          <h3 className="text-center">Seleccion de personajes</h3>
          <HeroList
            heroes={state}
            onAddHero={addHeroToMyTeam}
            onRemoveHero={deleteFromMyTeam}
            disabledConditional={false}
          />
        </Col>
        <Col>{myTeam}</Col>
      </Row>
    </Jumbotron>
  );
};

export default Home;
