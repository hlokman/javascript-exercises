const sumAll = function(numA, numB) {
    let finalSum=0;

    if (numA<=numB) {
        for (let i=numA; i<=numB; i++ ) {
            finalSum += i;
        } 
    } else {
        for (let i=numB; i<=numA; i++) {
            finalSum += i;
        }
    };


    if (numA < 0 || numB < 0 || !Number.isInteger(numA) || !Number.isInteger(numB)) {
        return 'ERROR';
    };

    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
