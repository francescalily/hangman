const prompt = require('prompt-sync')();
const getWord = require("./bot");
const { userChoiceDifficulty, userChoiceMenu, userChoiceLetter } = require('./user.js')



const checkWord = (userGuess, word) =>{
    if (word === userGuess){
        return "hangman";
    } else if (word.includes(userGuess)){
        return true;
    } else {
        return false;
    }
}


const getBotChoice = (choice) => {
    if (choice === 'easy') {
        return(getWord('easy'));
    } else if (choice === 'medium') {
        return(getWord('medium'));
    } else {
        return(getWord('hard'));
    }
}


const menu = () => {

    console.log("Press 1 to start a game: ")
    console.log("Press 2 to check highscore: ")
    console.log("Press q to quit: ")

    

    /*
    let userChoice = prompt(`Press 1 2 or q: `);
    while(!['1', '2', 'q'].includes(userChoice)) {
        userChoice = prompt('Invalid choice. Choose 1, 2 or: ');
        userChoice = userChoicechoice.toLowerCase();  
    }*/

    let userInput = userChoiceMenu();
    while (userInput != "q"){
        if (userInput == "1"){
            gameLoop();
            break;
        } else if (userInput == "2"){
            console.log("highscore is 2");
            break;
        }
    }
    console.log("thanks for playing"); 
}

function gameLoop() {
    
    const userChoice = userChoiceDifficulty();
    //get lives depending on difficulty
    let lives = getUserLives(userChoice);
    //generate random word
    
    const randomWord = getBotChoice(userChoice);
    //generate underscores
    const underscoredWord = getUnderscores(randomWord);
    //check letters with word
    const userLetter = userChoiceLetter();
    const matches = checkWord(userLetter, randomWord);
    if (matches == "hangman"){
        let playAgain = prompt(`Your score is <score>, do you want to play again, y/n: `) 
        while(!['y', 'n']) {
            playAgain = prompt(`Please choose y or n: `) 
        }
        if (playAgain == 'y') {
            return userChoice;
        } else {
            console.log('You have left the game');
        }
    } else if (matches == "true"){
        //replace underscores
        const index = randomWord.findIndex(userLetter);
        underscoredWord[index] = userLetter;
    } else {
        //reduce lives
        lives -= 1
    }
    
}

const getUserLives = (difficulty) => {
    switch (difficulty){
        case "easy":
            return 8
        case "medium":
            return 10
        case "hard":
            return 12
    }
}

const getUnderscores = (randomWord) => {
    let underscoreWord = []
    for (let i = 0; i < randomWord.length; i++) {
        underscoreWord[i] = '_';
    }
    return underscoreWord;
}

menu();

hangmanWord = "lego";
userGuess = "h";


/*
if (checkWord(userGuess, hangmanWord) == "hangman"){
    stop game
} else if (checkWord(userGuess, hangmanWord) == "true"){
    //replace udnerscore with letter
    //find index of letter in word
    //update underscore

} else if (checkWord(userGuess, hangmanWord) == "false"){
    //reduce lives bar by 1
}
*/








