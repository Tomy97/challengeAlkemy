import axios from "axios";
import { SuperHero, SuperHeroResponse } from "../types/Superhero";
export const getHeroService = async (name: string): Promise<SuperHero[]> => {
  const { data: { results } } = await axios.get<SuperHeroResponse>(
    `${process.env.RS_HERO_API_URL}${process.env.RS_HERO_API_KEY}/search/${name}`
  );
  return results;
};
