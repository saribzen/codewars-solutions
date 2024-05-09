// Find the difference between two collections. The difference means that either the character is present in one collection or it is present in other, but not in both. Return a sorted list with the difference.

// The collections can contain any character and can contain duplicates.

// Example
// A = [a, a, t, e, f, i, j]

// B = [t, g, g, i, k, f]

// difference = [a, e, g, j, k]


function diff(a, b){
    let res = [];
    for(let i=0; i<a.length; i++)
    {
      if(!b.includes(a[i]) && !res.includes(a[i])) res.push(a[i]);
    }
    
    for(let i=0; i<b.length; i++)
    {
      if(!a.includes(b[i]) && !res.includes(b[i])) res.push(b[i]);
    }
    
    return res.sort();
  }


//   https://www.codewars.com/kata/594093784aafb857f0000122/train/javascript