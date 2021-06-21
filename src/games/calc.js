import _ from 'lodash';

export const description = 'What is the result of the expression?';
const operators = '+-*';
const randomMin = 1;
const randomMax = 25;

const arithmeticOperations = (operator, firstOperand, secondOperand) => {
  let result;
  switch (operator) {
    case '+':
      result = _.add(firstOperand, secondOperand);
      break;
    case '-':
      result = _.subtract(firstOperand, secondOperand);
      break;
    case '*':
      result = _.multiply(firstOperand, secondOperand);
      break;
    default:
      break;
  }
  return result;
};

export const getQuestionAndAnswer = () => {
  const operator = _.sample(operators);
  const firstOperand = _.random(randomMin, randomMax);
  const secondOperand = _.random(randomMin, randomMax);
  const correct = arithmeticOperations(operator, firstOperand, secondOperand);
  const question = `${firstOperand.toString()} ${operator} ${secondOperand.toString()}`;
  return [question, correct.toString()];
};
