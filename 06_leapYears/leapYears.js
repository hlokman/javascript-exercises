const leapYears = function(year) {
    if (Number.isInteger(year/4) && !Number.isInteger(year/100) || Number.isInteger(year/100) && Number.isInteger(year/400)) {
        return true;
    } else {
        return false;
    } 
};

// Do not edit below this line
module.exports = leapYears;

/*   
        if (year % 4 == 0 && year % 100 != 0 || year % 100 == 0 && year % 400 == 0) {
        return true;
    } else {
        return false;
    }
    */