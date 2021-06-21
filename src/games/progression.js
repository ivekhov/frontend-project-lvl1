import _ from 'lodash';

export const description = 'What number is missing in the progression?';
const progressionLength = 10;

export const getQuestionAndAnswer = () => {
  const start = _.random(1, progressionLength);
  const step = _.random(1, progressionLength);
  const hiddenPosition = _.random(0, progressionLength - 1);

  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(step * i + start);
  }
  const correct = start + step * hiddenPosition;
  progression[hiddenPosition] = '..';
  const question = progression.join(' ');
  return [question, correct.toString()];
};
