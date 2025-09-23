 const removeFromArray = function(inputArr) {
    argumentsArr = Array.from(arguments).slice(1);

    finalArr = inputArr.filter(item => !argumentsArr.includes(item));
    return finalArr;
};

// Do not edit below this linex
module.exports = removeFromArray;
