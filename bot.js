

function getWord(difficulty){
    easyWords = ["swipe", "jumbo", "frost", "quirk", "chime", "toast", "amber", "flute", "giddy", "rumba"];
    mediumWords = ["penguin", "guitar", "bicycle", "whisper", "capture", "journey", "freedom", "morning", "sunset", "honesty"];
    hardWords = ["brilliant", "landscape", "adventure", "harmonize", "technology", "chocolate", "leadership", "wonderful", "curiosity", "happiness"];

    let item = ""
    switch (difficulty){
        case "easy":
            item = easyWords[Math.floor(Math.random()*easyWords.length)];
            return item;
        case "medium":
            item = mediumWords[Math.floor(Math.random()*mediumWords.length)];
            return item;
        case "hard":
            item = hardWords[Math.floor(Math.random()*hardWords.length)];
            return item;
    }
}

module.exports = getWord;