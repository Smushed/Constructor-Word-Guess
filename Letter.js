const inquirer = require(`inquirer`);

const answersArray = [`monkey`, `hippo`, `crocodile`, `lion`, `zebra`, `giraffe`, `elephant`, `rhinoceros`, `warthog`];
//Current word should be chosen with the "game start" mechanic
let currentWord = 0;
const guessObject = {};

//Make a constructor of letters used in each word
const LetterConst = () => {
    const letterArray = [``];
    for (let i = 0; i < answersArray[currentWord].length; i++) {
        //If the letter array does not include the current letter in the for loop then include it in the array
        if (!letterArray.includes(answersArray[currentWord][i])) {
            letterArray.push(answersArray[currentWord][i])
        };
    };
    //Removes the first part of the array, which is the empty value
    //Currently there because the includes statement above won't work unless there is a value in the array.
    letterArray.shift();

    //Updates the object of the letter array so it indicates each guess is false
    for (let i = 0; i < letterArray.length; i++) {
        guessObject[letterArray[i]] = false;
    };

    displayWord();
};

const displayWord = () => {
    let userDisplay = ``
    //Loop through the correct answer and for each word, if the value of the object is false then log blank to the console
    for (let i = 0; i < answersArray[currentWord].length; i++) {
        //If the user hasn't guessed the letter yet, then return blank
        if (guessObject[answersArray[currentWord][i]] === false) {
            userDisplay += `_ `;
        } else {
            //If user has guessed the letter, return the letter
            userDisplay += answersArray[currentWord][i];
        }
    };
    console.log(userDisplay)
};

const startGame = () => {
    currentWord = Math.floor(Math.random() * answersArray.length);
    LetterConst(currentWord)
}

startGame();

module.exports = { LetterConst, startGame }