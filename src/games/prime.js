import _ from 'lodash';

export const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomMin = 1;
const randomMax = 25;
let correct;

const isPrime = (number) => {
  if (number <= 1) return false;
  let start = 2;
  while (start < number / 2 + 1) {
    if (number % start === 0) return false;
    start += 1;
  }
  return true;
};

export const getQuestionAndAnswer = () => {
  const question = _.random(randomMin, randomMax);
  if (isPrime(question) === true) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  return [question.toString(), correct];
};
