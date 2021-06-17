/* eslint-disable no-case-declarations */
import _ from 'lodash';

export const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const randomMin = 1;
const randomMax = 25;

export const getQuestionAndAnswer = () => {
  const first = _.random(randomMin, randomMax);
  const second = _.random(randomMin, randomMax);
  const operation = _.sample(operators);
  let correct;

  if (operation === '+') {
    correct = _.add(first, second);
  } else if (operation === '-') {
    correct = _.subtract(first, second);
  } else if (operation === '*') {
    correct = _.multiply(first, second);
  }
  const question = [first.toString(), operation, second.toString()].join(' ');
  return [question, correct.toString()];
};
