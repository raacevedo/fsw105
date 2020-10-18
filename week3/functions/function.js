//returns sum
function sum(num1, num2){
  return num1 + num2
}

var result = sum(54, 45)
console.log(result)

//returns highest of 3 numbers
function highest(num1, num2, num3)
{
  var max = Math.max(num1, num2, num3);
  return max;
}

console.log(highest(1234, 2345, 13));

//returns odds or evens
function oddsEvens(n) {
  if(n % 2 === 0){
    return "Even";
  } else (n % 2 !== 0); {
    return "Odd";
  }
}
console.log(oddsEvens(7))

//returns string concatenation
function stringLength(string) {
  if (string.length > 20) {
    var halfStr = string.slice( 0, string.length / 2 )
    console.log(halfStr)
  
  } else if (string.length <= 20) {
  console.log(string + string)
  }
}
stringLength("i was born in puerto rico")
