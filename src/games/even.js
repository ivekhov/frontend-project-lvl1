import _ from 'lodash';

export const description = 'Answer "yes" if number even otherwise answer "no".';
const randomMin = 1;
const randomMax = 25;

const isEven = (number) => number % 2 === 0;
const expectedAnswer = (number) => (isEven(number) ? 'yes' : 'no');

export const getQuestionAndAnswer = () => {
  const question = _.random(randomMin, randomMax);
  return [question.toString(), expectedAnswer(question)];
};
