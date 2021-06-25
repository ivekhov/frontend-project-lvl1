import getRandomInt from '../utils.js';

export const description = 'What is the result of the expression?';
const operators = '+-*';
const randomMin = 1;
const randomMax = 25;

const arithmeticOperations = (operator, firstOperand, secondOperand) => {
  let result;
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      break;
  }
  return result;
};

export const getQuestionAndAnswer = () => {
  const operator = operators[getRandomInt(0, operators.length)];
  const firstOperand = getRandomInt(randomMin, randomMax);
  const secondOperand = getRandomInt(randomMin, randomMax);
  const correct = arithmeticOperations(operator, firstOperand, secondOperand);
  const question = `${firstOperand.toString()} ${operator} ${secondOperand.toString()}`;
  return [question, correct.toString()];
};
