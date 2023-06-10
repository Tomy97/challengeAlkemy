import { useState } from "react";
import { getHeroService } from "../service/hero.service";

const UseFetch = () => {
  const [superHeroes, setsuperHeroes] = useState([]);

  const getSuperHeroes = async (e) => {
    if (e.target.value.length >= 3) {
      const res = await getHeroService(e.target.value);
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
