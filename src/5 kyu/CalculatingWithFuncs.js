// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(func) {
    if(func == null)
      return 0;
    else
      return func[1](0, func[0]);
  }
  
  function one(func) {
    if(func == null)
      return 1;
    else
      return func[1](1, func[0]);
  }
  
  function two(func) {
    if(func == null)
      return 2;
    else
      return func[1](2, func[0]);
  }
  function three(func) {
    if(func == null)
      return 3;
    else
      return func[1](3, func[0]);
  }
  function four(func) {
    if(func == null)
      return 4;
    else
      return func[1](4, func[0]);
  }
  function five(func) {
    if(func == null)
      return 5;
    else
      return func[1](5, func[0]);
  }
  function six(func) {
    if(func == null)
      return 6;
    else
      return func[1](6, func[0]);
  }
  function seven(func) {
    if(func == null)
      return 7;
    else
      return func[1](7, func[0]);
  }
  function eight(func) {
    if(func == null)
      return 8;
    else
      return func[1](8, func[0]);
  }
  function nine(func) {
    if(func == null)
      return 9;
    else
      return func[1](9, func[0]);
  }
  
  
  function plus(val) {
    return [val, (v1, val) => parseInt(v1 + val)];
  }
  function minus(val) {
    return [val, (v1, val) => parseInt(v1 - val)];
  }
  function times(val) {
    return [val, (v1, val) => parseInt(v1 * val)];
  }
  function dividedBy(val) {
    return [val, (v1, val) => parseInt(v1 / val)];
  }


//   https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript