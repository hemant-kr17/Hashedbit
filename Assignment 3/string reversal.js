const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a string: ', (str) => {
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    hash[i] = str[str.length - i - 1];
  }
  const reversedStr = Object.values(hash).join('');
  console.log(reversedStr);
  rl.close();
});