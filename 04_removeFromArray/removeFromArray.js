
const removeFromArray = function(array, ...theArgs) {
    for (let i=array.length - 1; i>=0; i--) {
        for (let j=theArgs.length - 1; j>=0; j--) {
            if (array[i] !== theArgs[j] /*|| typeof(array[i]) !== typeof(theArgs[j])*/) {
                continue;
        }
        array.splice(array.indexOf(theArgs[j]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;


/*        Previous fails tests
/*const removeFromArray = function(array, ...theArgs) {
    for (arrayFiltered of array) {
        for (args of theArgs) {
        if (arrayFiltered === args) {
            array.splice(array.indexOf(args), 1);
            return array;
        }
    }
    }
}
    let total=[];

    for (const arg of theArgs) {
        for (i=0; i<array.length; i++) {
        if (arg == array[i]) return array.splice(array.indexOf(arg), 1);
        }
    }

if (arg == array) {
            return array.splice(theArgs.indexOf(arg), 1);*/



