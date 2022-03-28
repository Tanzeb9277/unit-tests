const add = function(arr) {
  let sum = 0;
  if(arr.length > 0){
    for (let i = 0; i < arr.length; i++){
        sum += parseInt(arr[i]);
    }
    return sum;
  }else{
    return sum;
  }
	
};

const subtract = function(arr) {
    let diffrence = arr[0];
    if(arr.length > 0){
      for (let i = 1; i < arr.length; i++){
          diffrence -= parseInt(arr[i]);
      }
      return diffrence;
    }else{
      return diffrence;
    }
      
  };

const multiply = function(arr) {
  let product = arr[0];
  if(arr.length > 0){
    for (let i = 1; i < arr.length; i++){
        product *= parseInt(arr[i]);
    }
    return product;
  }else{
    return product;
  }

};

const divide = function(arr) {
    let quotient = arr[0];
    if(arr.length > 0){
      for (let i = 1; i < arr.length; i++){
          quotient /= parseInt(arr[i]);
      }
      return quotient;
    }else{
      return quotient;
    }
  
  };



const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(num) {
  if (num == 0){
    return 1;
  }else
	  return (num * factorial(num - 1))
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  power,
  factorial
};
