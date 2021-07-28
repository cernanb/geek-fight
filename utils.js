const getStargazerCount = (repos) =>
  repos.reduce((acc, repo) => acc + repo.node.stargazerCount, 0);

const calculateScore = (fighter) => {
  const count = getStargazerCount(fighter.repositories.edges);
  console.log(count);
  return fighter.followers.totalCount * 2 + count;
};

export const processResults = (fighterOne, fighterTwo) => {
  return [fighterOne, fighterTwo]
    .sort((a, b) => calculateScore(b) - calculateScore(a))
    .map((fighter) => ({
      ...fighter,
      score: calculateScore(fighter),
      stargazerCount: getStargazerCount(fighter.repositories.edges),
    }));
};
