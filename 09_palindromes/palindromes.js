const palindromes = function (string) {

    if (string.split('').reverse().join('').replace(/[^a-zA-Z ]/g, "").replace(/ /g,'').toLowerCase() == string.replace(/[^a-zA-Z ]/g, "").replace(/ /g,'').toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
