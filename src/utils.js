export const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

export const genProgression = (progressionLength, step, start) => {
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(step * i + start);
  }
  return progression;
};
