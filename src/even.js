export const description = 'Answer "yes" if number even otherwise answer "no".';
const randomMin = 1;
const randomMax = 25;

const getRandomInt = (fromInt, toInt) => {
  const min = Math.ceil(fromInt);
  const max = Math.ceil(toInt);
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getQuestionAndAnswer = () => {
  const question = getRandomInt(randomMin, randomMax);
  let correct;

  if (question % 2 === 0) {
    correct = 'yes';
  } else {
    correct = 'no';
  }
  return [question.toString(), correct];
};
