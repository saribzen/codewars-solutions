// Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

// Example:

// Given an input string of:

// apples, pears # and bananas
// grapes
// bananas !apples
// The output expected would be:

// apples, pears
// grapes
// bananas
// The code would be called like so:

// var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// // result should == "apples, pears\ngrapes\nbananas"



function solution(text, markers) {
    let data = text.split('\n');
    let res = '';
    
    for(let i=0; i<data.length; i++)
    {
      let newStr = data[i].split(markers[0]);
      
      for(let j=1; j<markers.length; j++)
        newStr = newStr[0].split(markers[j]);
      
      res = res + (i === 0 ? '' : '\n') + newStr[0].trimRight();
    }
    
    return (res);
  }





//   https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript