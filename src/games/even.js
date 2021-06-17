import _ from 'lodash';

export const description = 'Answer "yes" if number even otherwise answer "no".';
const randomMin = 1;
const randomMax = 25;

export const getQuestionAndAnswer = () => {
  const question = _.random(randomMin, randomMax);
  let correct;

  if (question % 2 === 0) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  return [question.toString(), correct];
};
