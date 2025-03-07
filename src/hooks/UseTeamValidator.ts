// Todo: Revisar el tipado de tipado de los parametros y metodos
export const useTeamValidator = (hero: any, team: any) => {
  let myTeamAlignmentFunction = (alignment: string) =>
    team.filter(({ biography }: any) => biography.alignment === alignment).length >=
    3;
  const myTeamIsFull = team.length >= 6;
  const myTeamHasThisHero = team.find(({ id }: any) => id === hero.id);
  const myTeamHasGoodAlignment = myTeamAlignmentFunction("good");
  const myTeamHasBadAlignment = myTeamAlignmentFunction("bad");

  return {
    myTeamIsFull,
    myTeamHasThisHero,
    myTeamHasGoodAlignment,
    myTeamHasBadAlignment,
  };
};
