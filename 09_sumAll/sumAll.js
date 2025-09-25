const sumAll = function(num1, num2) {
    let start=num1;
    let end=num2;
    if(num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return "ERROR";
    }
    
    if (num1 > num2) {
        start=num2;
        end=num1;
    }

    let result=start;

    for(let i=1; i<=end-start; i++) {
        result += (start + i);
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
