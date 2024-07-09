function correctfn(sentence, wrong, correct) {
    console.log("Original sentence: " + sentence);
    console.log("Wrong word: " + wrong);
    while (sentence.includes(wrong)) {
        sentence = sentence.replace(wrong, correct);
    }
    console.log("Corrected sentence: " + sentence);
    return sentence;
}
let sentence = "The qick brown fox jumps over the lazy dog. The qick brown fox is very fast.";
let wrongWord = "qick";
let correctWord = "quick";
correctfn(sentence, wrongWord, correctWord);
