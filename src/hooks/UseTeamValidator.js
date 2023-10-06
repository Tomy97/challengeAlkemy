export const useTeamValidator = (hero, team) => {
  let myTeamAlignmentFunction = (alignment) =>
    team.filter(({ biography }) => biography.alignment === alignment).length >=
    3;
  const myTeamIsFull = team.length >= 6;
  const myTeamHasThisHero = team.find(({ id }) => id === hero.id);
  const myTeamHasGoodAlignment = myTeamAlignmentFunction("good");
  const myTeamHasBadAlignment = myTeamAlignmentFunction("bad");

  return {
    myTeamIsFull,
    myTeamHasThisHero,
    myTeamHasGoodAlignment,
    myTeamHasBadAlignment,
  };
};
