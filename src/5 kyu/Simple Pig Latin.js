// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !


function pigIt(str){
    let words = str.split(" ");
    let newStr = "";
    
    words.forEach((i) => 
    {
      if(i != '!' && i != '?')
      {
        i = i + i[0] + "ay";
        newStr = newStr + " " + i.slice(1);
      }
      else
        newStr = newStr + " " + i;
    })
    
    return newStr.trim();
  }
  
  
  // https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript