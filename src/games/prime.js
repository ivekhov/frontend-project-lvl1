import { getRandomInt } from '../utils.js';
import play from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomMin = 1;
const randomMax = 25;

const isPrime = (number) => {
  if (number <= 1) return false;
  for (let index = 2; index <= number / 2; index += 1) {
    if (number % index === 0) return false;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const question = getRandomInt(randomMin, randomMax);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question.toString(), correctAnswer];
};

play(description, getQuestionAndAnswer);
