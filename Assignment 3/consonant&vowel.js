let string = "The quick brown fox jumps over the lazy dog";
string = string.toLowerCase();
const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = 0;
let consonantCount = 0;
string.split('').forEach(char => {
    if (vowels.includes(char)) {
        vowelCount++;
    } else if (char >= 'a' && char <= 'z') {
        consonantCount++;
    }
});
console.log("Number of vowels:", vowelCount);
console.log("Number of consonants:", consonantCount);
