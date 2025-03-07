import axios from "axios";
import { SuperheroApiResponse } from "../types/SuperheroApiResponse";
export const getHeroService = async (name: string) => {
  const { data: { results } } = await axios.get<SuperheroApiResponse>(
    `${process.env.RS_HERO_API_URL}${process.env.RS_HERO_API_KEY}/search/${name}`
  );
  return results;
};
