const fibonacci = function(num) {
    if (!Number.isInteger(Number(num)) || Number(num) < 0) {
        return "OOPS";
    } else if (Number(num) <= 2 && Number(num) > 0) {
        return 1;
    }
    
    let fib1 = 1;
    let fib2 = 1;
    let temp = 0;

    for (let i=2; i<Number(num); i++) {
        temp = fib1 + fib2;
        fib1 = fib2;
        fib2 = temp;
    }

    return temp;
};

// Do not edit below this line
module.exports = fibonacci;
