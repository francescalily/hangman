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

module.exports = {
    userChoiceDifficulty,
    userChoiceMenu,
}

