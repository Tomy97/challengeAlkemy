import axios from "axios";

export const getHeroService = async (name) => {
  const { data } = await axios.get(
    `https://superheroapi.com/api.php/10225623741490454/search/${name}`
  );
  return data.results;
};
