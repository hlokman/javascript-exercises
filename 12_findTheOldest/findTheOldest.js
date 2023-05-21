const findTheOldest = function(array) {
    let mapped = array.map((item) => {
        if (item.yearOfDeath === undefined) {
           return ({
                name: `${item.name}`,
                age: (new Date()).getFullYear()- item.yearOfBirth,
            })
        } else {
            return ({
                name: `${item.name}`,
                age: item.yearOfDeath - item.yearOfBirth,
            })
        }
    });
    
    let sorted = mapped.sort((a,b) => {
        if (a.age > b.age) {
            return -1
        } else {
            return 1
        }
    });

    return sorted.reduce((obj, item, index) => {
        if (index == 0) {
            obj = item;
        }
        return obj;
    }, {});
};

// Do not edit below this line
module.exports = findTheOldest;








/*let sorted = array.sort((a,b) => {
     if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
        return -1
    } else {
        return 1
     }
 });
console.log(sorted);

 return sorted.reduce((obj, item, index) => {
     if (index == 0) {
         obj = item;
     }
     return obj
 },{})*/
 
/*
let sorted = array.sort((a,b) => {
        if ((a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth)) {
            return -1
        } else {
            return 1
        }
    });

    sorted.reduce((obj, item, index) => {
        //if (index == 0)
        obj = item
        //obj = item;
        console.log(item.name)
        //return obj
    },{})
    return array;*/


    /*
        return array.reduce((obj, item, index) => {
        //if (item[i].yearOfDeath - item[i].yearOfBirth)
        //obj = item;
        console.log(item.name)
        //return obj
    },{})*/