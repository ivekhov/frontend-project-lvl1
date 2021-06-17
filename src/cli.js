import readlineSync from  'readline-sync';


console.log('Welcome to the Brain Games!');
var hello = 'Hello, ';
var userName = readlineSync.question('May I have your name?\n');
console.log(hello.concat(userName, '!'));
