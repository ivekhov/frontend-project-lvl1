import readlineSync from 'readline-sync';

const attemptCounts = 3;

const play = (description, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  console.log();

  for (let i = 0; i < attemptCounts; i += 1) {
    const response = getQuestionAndAnswer();
    const question = response[0];
    const correct = response[1];
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correct) {
      console.log(`'${answer}' is wrong answer ;(.`);
      console.log(`Correct answer was '${correct}'`);
      console.log(`Let\`s try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default play;