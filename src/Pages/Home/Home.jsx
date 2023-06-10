import { useState } from "react";
import { Col, Row, Jumbotron } from "react-bootstrap";
import { useAlert } from "../../hooks/UseAlert";
import Search from "../../components/Search";
import UseFetch from "../../hooks/UseFetch";
import HeroList from "../../components/HeroList";
import { validarAgregar } from "../../hooks/UseTeamValidator";

const Home = () => {
  const { state, getSuperHeroes } = UseFetch();
  const [equipo, setEquipo] = useState([]);
  const [isMyTeam, setIsMyTeam] = useState(false);

  const agregarHeroeAlEquipo = (hero) => {
    const resultadoValidacion = validarAgregar(hero, equipo);
    if (resultadoValidacion === "") {
      setIsMyTeam(true);
      setEquipo([...equipo, hero]);
    } else {
      useAlert.fire({
        icon: "error",
        title: resultadoValidacion,
      });
    }
  };

  const sacarDelEquipo = (hero) => {
    const equipoFiltrado = equipo.filter((heroe) => heroe.id !== hero.id);
    setEquipo(equipoFiltrado);
  };

  return (
    <Jumbotron>
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
            heroes={equipo}
            isInMyTeam={isMyTeam}
            onAddHero={agregarHeroeAlEquipo}
            onRemoveHero={sacarDelEquipo}
          />
        </Col>
        <Col lg={6}>
          <h3 className="text-center">Seleccion de personajes</h3>
          <HeroList
            heroes={state}
            onAddHero={agregarHeroeAlEquipo}
            onRemoveHero={sacarDelEquipo}
          />
        </Col>
      </Row>
    </Jumbotron>
  );
};

export default Home;
