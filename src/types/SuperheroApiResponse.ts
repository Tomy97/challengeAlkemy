import { SuperHero } from "./Superhero";

export type SuperheroApiResponse = {
  response: string;
  "results-for": string;
  results: SuperHero[];
};
