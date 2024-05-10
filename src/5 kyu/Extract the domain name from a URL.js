// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
    let n = url.split('//');
    if(n.length > 1) url = n[1];
    
    n = url.split('www.');
    if(n.length > 1) url = n[1];
    
    n = url.split('.');
    if(n.length > 1) url = n[0];
    
    return url;
  }

//   https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript