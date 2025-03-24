import { FC, useRef } from "react";
import { HeroListCard } from "./HeroListCard";
import { SuperHero } from "../types/Superhero";
import { Toast } from "primereact/toast";

interface HeroListProps {
  heroes: SuperHero[];
  isInMyTeam?: boolean;
  disabledConditional?: boolean;
}
export const HeroList: FC<HeroListProps> = ({
  heroes,
  isInMyTeam = false,
  disabledConditional = false,
}) => {
  const toast = useRef<Toast>(null);

  const onAddToMyTeam = (hero: SuperHero) => {
    const storedTeam: SuperHero[] = JSON.parse(
      localStorage.getItem("my-team") || "[]"
    ) as SuperHero[];

    const isHeroAlreadyAdded = storedTeam.some(
      (h: SuperHero) => h.id === hero.id
    );

    const goodHeroesCount = storedTeam.filter(
      (hero: SuperHero) => hero.biography.alignment === "good"
    ).length;
    const badHeroesCount = storedTeam.filter(
      (hero: SuperHero) => hero.biography.alignment === "bad"
    ).length;

    if (isHeroAlreadyAdded) {
      return toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "Este héroe ya está en tu equipo.",
      });
    }
    if (hero.biography.alignment === "good" && goodHeroesCount >= 3) {
      return toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "No puede haber mas de 3 buenos heroes.",
      });
    }

    if (hero.biography.alignment === "bad" && badHeroesCount >= 3) {
      return toast.current?.show({
        severity: "error",
        summary: "Error",
        detail: "No puede haber mas de 3 malos.",
      });
    }

    const updatedTeam = [...storedTeam, hero];
    localStorage.setItem("my-team", JSON.stringify(updatedTeam));
    toast.current?.show({
      severity: "success",
      summary: "Éxito",
      detail: `${hero.name} agregado a tu equipo.`,
    });
  };

  const onRemoveToMyTeam = (heroId: string) => {
    console.log("heroId", heroId);
  };
  return (
    <>
      <Toast ref={toast} position="top-center" />
      <div className="flex flex-column lg:flex-row gap-3 mt-4">
        {heroes.map((hero) => (
            <HeroListCard
              key={hero.id}
              hero={hero}
              isInMyTeam={isInMyTeam}
              disabledConditional={disabledConditional}
              onAddHero={() => onAddToMyTeam(hero)}
              onRemoveHero={() => onRemoveToMyTeam(hero.id)}
            />
        ))}
      </div>
    </>
  );
};
