const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a paragraph: ', (paragraph) => {
  let words = paragraph.trim().split(/\s+/);
  console.log(`The paragraph contains ${words.length} words.`);
  rl.close();
});