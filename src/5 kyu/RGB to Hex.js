// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"


function rgb(r, g, b) {
    let res = convertHex(r) + convertHex(g) + convertHex(b)
    return res.toUpperCase();
  }
  
  const convertHex = (a) =>
  {
    if(a < 16)
    {
      return (a >= 0) ? '0' + a.toString(16) : '00'
    }
    else
    {
      return (a > 255) ? 'ff' : a.toString(16)
    }
  }
  
  
  
//   https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript