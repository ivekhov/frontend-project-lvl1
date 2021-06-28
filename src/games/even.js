import getRandomInt from '../utils.js';

export const description = 'Answer "yes" if number even otherwise answer "no".';
const randomMin = 1;
const randomMax = 25;

const isEven = (number) => number % 2 === 0;
const getExpectedAnswer = (number) => (isEven(number) ? 'yes' : 'no');

export const getQuestionAndAnswer = () => {
  const question = getRandomInt(randomMin, randomMax);
  return [question.toString(), getExpectedAnswer(question)];
};
