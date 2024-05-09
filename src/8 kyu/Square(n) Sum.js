// omplete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1
// 2
// +
// 2
// 2
// +
// 2
// 2
// =
// 9
// 1 
// 2
//  +2 
// 2
//  +2 
// 2
//  =9.


function squareSum(numbers){
    let sum = 0;
    
    numbers.forEach((i) => {
      sum = sum + i ** 2;
    })
    
    return sum;
  }
  
  
//   https://www.codewars.com/kata/515e271a311df0350d00000f/train/javascript