// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']


function solution(str){
    let arr = [];
    
    if(str.length > 0)
    {
      arr = str.match(/.{1,2}/g);
      if(arr[arr.length - 1].length < 2)
        arr[arr.length - 1] = arr[arr.length - 1] + '_';
    }
    
    return arr;
  }
  
  
  
  
//   https://www.codewars.com/kata/515de9ae9dcfc28eb6000001