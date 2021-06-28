import getRandomInt from '../utils.js';

export const description = 'What is the result of the expression?';
const operators = '+-*';
const randomMin = 1;
const randomMax = 25;

const genComputation = (operator, firstOperand, secondOperand) => {
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
      throw new Error(`Неизвестный оператор: '${operator}'!`);
  }
  return result;
};

export const getQuestionAndAnswer = () => {
  const operator = operators[getRandomInt(0, operators.length)];
  const firstOperand = getRandomInt(randomMin, randomMax);
  const secondOperand = getRandomInt(randomMin, randomMax);
  const correctAnswer = genComputation(operator, firstOperand, secondOperand);
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  return [question, correctAnswer.toString()];
};
