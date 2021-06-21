import _ from 'lodash';

export const description = 'Find the greatest common divisor of given numbers.';
const randomMin = 1;
const randomMax = 25;

const findGcd = (first, second) => {
  if (second === 0) return first;
  return findGcd(second, first % second);
};

export const getQuestionAndAnswer = () => {
  const first = _.random(randomMin, randomMax);
  const second = _.random(randomMin, randomMax);
  const correct = findGcd(first, second);
  const question = [first.toString(), second.toString()].join(' ');
  return [question, correct.toString()];
};
