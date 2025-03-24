import { FC } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { SuperHero } from "../types/Superhero";

// Todo HeroListCard: Hay una herencia de metodos de componente abuelo -> Padre -> nieto... Revisar eso que se puede mejorar.
// Todo HeroListCard: corregir la maqueta... Como que mucha info para un card que solo tiene que mostrar una info reducida
// Todo HeroListCard: Revisar a futuro si conviene hacer el card como un link para que me lleve al detalle para ver toda esta data
interface HeroListCardProps {
  hero: SuperHero;
  isInMyTeam?: boolean;
  disabledConditional?: boolean;
  onAddHero: (hero: SuperHero) => void;
  onRemoveHero: (hero: SuperHero) => void;
}

export const HeroListCard: FC<HeroListCardProps> = ({
  hero,
  isInMyTeam = false,
  disabledConditional = false,
  onAddHero,
  onRemoveHero
}) => {
  return (
    <Card
      title={hero.name}
      header={
        <img alt={hero.name ?? '#'} src={hero.image.url} style={{ maxHeight: "480px" }} />
      }
      className="w-full border-round"
      key={hero.id}
      footer={
        <Button
          label={isInMyTeam ? "Sacar del equipo" : "Agregar a mi equipo"}
          className="w-full"
          onClick={() => isInMyTeam ? onRemoveHero(hero) : onAddHero(hero)}
          disabled={disabledConditional}
        />
      }
    >
      <p className="m-0">{hero.biography["full-name"]}</p>
    </Card>
  );
};
