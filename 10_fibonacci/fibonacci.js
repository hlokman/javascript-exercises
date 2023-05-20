const fibonacci = function(num) {
    let fib = [0, 1];

    if (Number(num) >= 0) {
        for (let i = 2; i <= Number(num); i++) {
            fib.splice(i, 0, fib[i - 1] + fib[i - 2]); 
        };
    } else {
        return "OOPS"
    };

    return fib[Number(num)];
};

// Do not edit below this line
module.exports = fibonacci;
