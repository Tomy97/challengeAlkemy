import { useState, useEffect } from "react";
import { SuperHero } from "../types/Superhero";
import { getHeroService } from "../service/hero.service";

export const useHeroesSearch = (val: string) => {
  const [heroes, setHeroes] = useState<SuperHero[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchHeroes = async () => {
      if (val.length >= 3) {
        setLoading(true);
        const heroes = await getHeroService(val);
        setHeroes(heroes);
        setLoading(false);
      } else {
        setHeroes([]);
      }
    };

    fetchHeroes();
  }, [val]);

  return { heroes, loading };
};
