// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
    text = text.toLowerCase();
    let aD = {a:'1', b:'2', c:'3', d:'4', e:'5', f:'6', g:'7', h:'8', i:'9', j:'10', k:'11',
             l:'12',m:'13',n:'14',o:'15',p:'16',q:'17',r:'18',s:'19',t:'20',u:'21',v:'22',
             w:'23',x:'24',y:'25',z:'26'};
    let res = [];
    
    for(let i=0; i<text.length; i++)
    {
      let val = aD[text[i]];
      if(val != undefined) res.push(val);
    }
    
    return res.join(' ');
  }


//   https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript;