import { genProgression, getRandomInt } from '../utils.js';
import play from '../index.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const getQuestionAndAnswer = () => {
  const start = getRandomInt(1, progressionLength);
  const step = getRandomInt(1, progressionLength);
  const hiddenPosition = getRandomInt(0, progressionLength - 1);

  const progression = genProgression(progressionLength, step, start);
  const correctAnswer = start + step * hiddenPosition;
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer.toString()];
};

play(description, getQuestionAndAnswer);
