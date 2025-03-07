import { useState } from "react";
import { getHeroService } from "../service/hero.service";

// Todo: corregir tambien el servicio, lo que devuelve y lo que se le manda
const UseFetch = () => {
  const [superHeroes, setsuperHeroes] = useState([]);

  const getSuperHeroes = async (e: any) => {
    if (e.target.value.length >= 3) {
      const res: any = await getHeroService(e.target.value);
      if (res) {
        setsuperHeroes(res);
      }
    }
  };
  return {
    state: superHeroes,
    getSuperHeroes,
  };
};

export default UseFetch;
