import { getRandomInt } from './calc.js';

export const description = 'Find the greatest common divisor of given numbers.';
const randomMin = 1;
const randomMax = 25;

const findGcd = (first, second) => {
  if (second === 0) return first;
  return findGcd(second, first % second);
};

export const getQuestionAndAnswer = () => {
  const firstOperand = getRandomInt(randomMin, randomMax);
  const secondOperand = getRandomInt(randomMin, randomMax);
  const correct = findGcd(firstOperand, secondOperand);
  const question = `${firstOperand.toString()} ${secondOperand.toString()}`;
  return [question, correct.toString()];
};
