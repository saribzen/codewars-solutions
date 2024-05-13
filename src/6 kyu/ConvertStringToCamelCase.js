// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"

// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

// "The_Stealth-Warrior" gets converted to "TheStealthWarrior"



function toCamelCase(str){
  
    if(str === '') return '';
    
    let n = str.replace(/[-_]/g, " ").split(' ');
    
    str = '';
    for(let i=0; i<n.length; i++)
    {
      let word = n[i].split('');
      if(i != 0) word[0] = word[0].toUpperCase();
      str += word.join('');
    }
    
    return str;
  }


//   https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript