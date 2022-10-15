const add = function() {
  return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

const sum = function() {
  console.log(Array.from(arguments));
	return arguments[0].reduce((sum,number) => {return sum + number},0);
};

const multiply = function() {
  return arguments[0].reduce((product,number) => {return product * number},1)
};

const power = function() {
	return arguments[0] ** arguments[1];
};

const factorial = function() {
	num = arguments[0];
  product = 1;
  while(num >0){
    product *= num;
    num--;
  }
  return product;
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
