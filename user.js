const prompt = require('prompt-sync')();

const userChoiceDifficulty = () =>{
    let choice = prompt(`Please choose a difficulty out of easy, medium or hard: `);
    choice = choice.toLowerCase();
    while(!['easy', 'medium', 'hard'].includes(choice)) {
        choice = prompt('Invalid choice. Please choose easy, medium or hard: ');
        choice = choice.toLowerCase();  
    }
    return choice;
}

const userChoiceMenu = () => {
    let choice = prompt(`Please choose 1, 2 or q: `);
    choice = choice.toLowerCase();
    while(!['1', '2', 'q'].includes(choice)) {
        choice = prompt('Invalid choice. Please 1, 2 or q: ');
        choice = choice.toLowerCase();  
    }
    return choice;
}

// let acceptedLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h','i', 'j', 'k', 'l', 'm', 'n', 'o', 'p','q', 'r', 's', 't', 'u', 'v', 'w', 'x','y', 'z']


const userChoiceLetter = () => {
    let choice = prompt(`Please choose a letter: `);
    choice = choice.toLowerCase();
    while (!(choice.length === 1 && choice.match(/[a-z]/i))) {
        console.log(typeof choice)
        console.log(choice.length)
        choice = prompt('Invalid choice, please choose one letter between A-Z: ')
    }
    return choice;     
}

module.exports = {
    userChoiceDifficulty,
    userChoiceMenu,
    userChoiceLetter
}

