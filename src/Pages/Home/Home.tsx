// Todo Home: maquetar todo el componente home que es donde selecciono o busco un super heroe
import { useState } from "react";
// import { Col, Row, Jumbotron } from "react-bootstrap";
// import { useAlert } from "../../hooks/UseAlert";
import {Search} from "../../components/Search";
import UseFetch from "../../hooks/UseFetch";
import {HeroList} from "../../components/HeroList";
// import { useTeamValidatorMessages } from "../../hooks/UseTeamValidatorMessages";

// const useAddHeroToMyTeam = () => {
//   const [myTeam, setMyTeam] = useState([]);
//   const [isMyTeam, setIsMyTeam] = useState(false);
//   const { state, getSuperHeroes } = UseFetch();

//   const addHeroToMyTeam = (hero) => {
//     const validationResult = useTeamValidatorMessages(hero, myTeam);
//     if (validationResult === "") {
//       setIsMyTeam(true);
//       setMyTeam([...myTeam, hero]);
//     } else {
//       useAlert.fire({
//         icon: "error",
//         title: validationResult,
//       });
//     }
//   };

//   const deleteFromMyTeam = (hero) => {
//     const myTeamFiltered = myTeam.filter((heroe) => heroe.id !== hero.id);
//     setMyTeam(myTeamFiltered);
//   };


//   console.log('myTeam' , myTeam)
  
//   return {
//     state,
//     myTeam,
//     isMyTeam,
//     getSuperHeroes,
//     addHeroToMyTeam,
//     deleteFromMyTeam,
//   };
// };

export const Home = () => {
  // const {
  //   state,
  //   myTeam,
  //   isMyTeam,
  //   getSuperHeroes,
  //   addHeroToMyTeam,
  //   deleteFromMyTeam,
  // } = useAddHeroToMyTeam();

  return (
    <>
    </>
    // <Jumbotron className="mb-0 vh-100 container-fluid">
    //   <Row className="mb-3">
    //     <Col>
    //       <h1 className="text-center">Eligé un Super Heroe</h1>
    //     </Col>
    //   </Row>
    //   <Row className="justify-content-center">
    //     <Col md={6} lg={3}>
    //       <Search getSuperHeroes={getSuperHeroes} />
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col lg={12}>
    //       <h3 className="text-center">Seleccion de personajes</h3>
    //       <HeroList
    //         heroes={state}
    //         onAddHero={addHeroToMyTeam}
    //         onRemoveHero={deleteFromMyTeam}
    //         disabledConditional={false}
    //       />
    //     </Col>
    //   </Row>
    // </Jumbotron>
  );
};