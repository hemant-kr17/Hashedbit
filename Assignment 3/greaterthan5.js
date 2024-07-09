const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a list of numbers separated by commas: ', (userInput) => {
  const inputArr = userInput.split(",").map(Number);
  const answer = inputArr.filter(num => num > 5);
  console.log(answer);
  rl.close();
});