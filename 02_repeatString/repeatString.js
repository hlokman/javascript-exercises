const repeatString = function(word, times) {
    let chosenWord = '';
    
    if (times < 0) {
        return 'ERROR'
    };

    for (let i=1; i<=times; i++) {
        chosenWord += word
    }
    return chosenWord;


};

// Do not edit below this line
module.exports = repeatString;
