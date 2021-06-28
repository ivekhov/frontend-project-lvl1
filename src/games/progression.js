import { genProgression, getRandomInt } from '../utils.js';

export const description = 'What number is missing in the progression?';
const progressionLength = 10;

export const getQuestionAndAnswer = () => {
  const start = getRandomInt(1, progressionLength);
  const step = getRandomInt(1, progressionLength);
  const hiddenPosition = getRandomInt(0, progressionLength - 1);

  const progression = genProgression(progressionLength, step, start);
  const correctAnswer = start + step * hiddenPosition;
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer.toString()];
};
