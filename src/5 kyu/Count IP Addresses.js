// Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

// All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.


function ipsBetween(start, end){
    let f = start.split('.');
    let l = end.split('.');
    let ip = [0, 0, 0, 0];
    let mag = 3;
    
    for(let i=0; i<4; i++)
    {
      ip[i] = (l[i] - f[i]) * (256 ** mag--);
    }
    
    return ip[0] + ip[1] + ip[2] + ip[3];
  }




//   https://www.codewars.com/kata/526989a41034285187000de4/train/javascript