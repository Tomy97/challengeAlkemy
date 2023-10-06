import propTypes from "prop-types";
import { useAlert } from "./UseAlert";

export const useTeamValidatorMessages = (hero, equipos) => {
  let MAX_HEROES_MESSAGE = "No puedes agregar más de 6 personajes";
  let DUPLICATE_HERO_MESSAGE = "Ya agregó al héroe al equipo";
  // let GOOD_ALIGNMENT_LIMIT_MESSAGE =
  //   "Solo puede haber 3 héroes con orientación buena";
  // let BAD_ALIGNMENT_LIMIT_MESSAGE =
  //   "Solo puede haber 3 héroes con orientación mala";

  if (equipos.length >= 6) {
    return useAlert.fire({
      icon: "error",
      title: MAX_HEROES_MESSAGE,
    });
  }
  if (equipos.find(({ id }) => id === hero.id)) {
    return useAlert.fire({
      icon: "error",
      title: DUPLICATE_HERO_MESSAGE,
    });
  }
  return "";
};

useTeamValidatorMessages.propTypes = {
  hero: propTypes.object.isRequired,
  equipos: propTypes.array.isRequired,
};
