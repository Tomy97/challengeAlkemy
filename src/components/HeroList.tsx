import { FC } from "react";
import { HeroListCard } from "./HeroListCard";

// Todo HeroList: Corregir el tema del grillado, como tambien el tipado que va a recibir, como tambien su logica. Creo que se puede hacer algo mejor
interface HeroListProps {
  heroes: any[]
  isInMyTeam: boolean
  disabledConditional: boolean
  onAddHero: () => void
  onRemoveHero: () => void
}
export const HeroList: FC<HeroListProps> = ({
  heroes,
  isInMyTeam,
  disabledConditional,
  onAddHero,
  onRemoveHero,
}) => {
  return (
    // <Row className="justify-content-center">
    //   {heroes.map((hero) => (
    //     <Col md={6} sm={3} key={hero.id}>
    //       <CardDeck>
    //         <HeroListCard
    //           hero={hero}
    //           isInMyTeam={isInMyTeam}
    //           onAddHero={onAddHero}
    //           onRemoveHero={onRemoveHero}
    //           disabledConditional={disabledConditional}
    //         />
    //       </CardDeck>
    //     </Col>
    //   ))}
    // </Row>
    <></>
  );
};