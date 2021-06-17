import _ from 'lodash';

export const description = 'Find the greatest common divisor of given numbers.';
const randomMin = 1;
const randomMax = 25;

const findGcd = (first, second) => {
  let large;
  let small;
  let residual;

  if (first > second) {
    large = first;
    small = second;
  } else {
    large = second;
    small = first;
  }
  residual = large % small;
  while (residual !== 0) {
    large = small;
    small = residual;
    residual = large % small;
  }
  return small;
};

export const getQuestionAndAnswer = () => {
  const first = _.random(randomMin, randomMax);
  const second = _.random(randomMin, randomMax);
  const correct = findGcd(first, second);
  const question = [first.toString(), second.toString()].join(' ');
  return [question, correct.toString()];
};
