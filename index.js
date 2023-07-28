const prompt = require('prompt-sync')();
const getWord = require("./bot");
const { userChoiceDifficulty, userChoiceMenu } = require('./user.js')



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
        console.log(getWord('easy'));
    } else if (choice === 'medium') {
        console.log(getWord('medium'));
    } else {
        console.log(getWord('hard'));
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
    //generate random word
    
    const botChoice = getBotChoice(userChoice);
    //generate underscores
    getUnderscores(botChoice);
    //
    

    
}


function getUnderscores(randomWord) {
    underscoreWord = []
    for (let i = 0; i < randomWord.length; i++) {
        underscoreWord[i] = '_';
    }
    console.log(underscoreWord)
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








