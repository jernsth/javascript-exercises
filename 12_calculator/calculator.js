const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(sumArray) {
	return sumArray.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
};

const multiply = function(multArray) {
  	return multArray.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
};

const power = function(base, exponent) {
	let result = base;
  for(let i=1; i<exponent; i++) {
    result *= base;
  }
  return result;
};

const factorial = function(num) { 
  let result = 1;
  for( let i=num; i>0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
