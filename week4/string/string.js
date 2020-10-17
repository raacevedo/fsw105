//1
function capitalizeAndLowercase(str){
    var upperAndLower = str.toUpperCase() + str.toLowerCase()
    return "Your output for all upper and all lower is: " +  upperAndLower;
}
console.log(capitalizeAndLowercase("Hello"));
console.log("======")

//2
function findMiddleIndex(str){
    var halfOfSting = Math.floor(str.length / 2);
    return "Half of length rounded down is " + halfOfSting;
}
console.log(findMiddleIndex("Hello"))
console.log(findMiddleIndex("Hello World"))
console.log("======")

//3
function returnFirstHalf(str){
    var halfOfIt = str.slice( 0, str.length / 2 )
    return "1st Half of the length of the string is " + halfOfIt
}
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));
console.log("======")

//4
function capitalizeAndLowercase(str){
    var capHalf = str.slice( 0, str.length / 2 )
    var capIt = capHalf.toUpperCase()
    var lowerHalf = str.slice(str.length / 2)
    var lowerIt = lowerHalf.toLowerCase()
    return capIt + lowerIt
}

console.log(capitalizeAndLowercase("Hello"))
console.log(capitalizeAndLowercase("Hello World"))
console.log("======")

// optional challenge
function capitalize(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var i = 0; i < array1.length; i++){
      newarray1.push(array1[i].charAt(0).toUpperCase()+array1[i].slice(1));
  }
  return newarray1.join(' ');
}
console.log(capitalize("hey friends! practice practice practice!"));
console.log("======")

//Array Methods Exercise

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function joinedFood(array1, array2){

// Remove the last item from the vegetable array.
array2.pop()

// Remove the first item from the fruit array.
array1.shift()

// Find the index of "orange."
var orangeIndex = array1.indexOf("orange")
// console.log(orangeIndex)

// Add that number to the end of the array1 array.
array1.push(orangeIndex)

// Use the length property to find the length of the vegetable array
var v = array2.length;
// console.log(v)

// Add that number to the end of the vegetable array
array2.push(v)

// Put the two arrays together into one array. array1 first. Call the new Array "food".
var food = array1.concat(array2)

// Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4, 2)

// Reverse your array.
food.reverse()

// turn the array into a string and return it.
var joinedFood = food.join(", ")



// console.log(array1)
// console.log(array2)
// console.log(food)
console.log(joinedFood)
}
joinedFood(fruit,vegetables)