import getRandomInt from '../utils.js';

export const description = 'What number is missing in the progression?';
const progressionLength = 10;

export const getQuestionAndAnswer = () => {
  const start = getRandomInt(1, progressionLength);
  const step = getRandomInt(1, progressionLength);
  const hiddenPosition = getRandomInt(0, progressionLength - 1);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(step * i + start);
  }
  const correct = start + step * hiddenPosition;
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');
  return [question, correct.toString()];
};
