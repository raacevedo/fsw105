//preliminaries

if(5 > 3){
    console.log("is greater than")
}

if("cat".length === 3) {
    console.log("is the length");
}

if("cat" === "dog"){
    console.log("same")
} else {
    console.log("not the same")
}

//Bronze Medal:
var person = {
    name: "Bobby",
    age: 12
}

if(person.age >= 18) {
    console.log( person.name + " " + "is allowed to go to the movie");
} else {
    console.log( person.name + " " + "is not allowed to go to the movie");
}

if(person.name.charAt(0) === "B") {
    console.log(person.name + " is allowed to go to the movie");
}

if(person.name.charAt(0) === "B" && person.age >=18) {
    console.log(person.name + " " + "is allowed to go to the movie");
} else{
    console.log(person.name + " " + "is not allow to go to the movie")
}

//Silver Medal:
if(1 === "1"){
    console.log("strict")
}  else  if(1 === "1"){
    console.log ("loose")
} else if(1 !== "1"){
    console.log("not equal at all")
}

if(1<=2 && 2 == 4){
    console.log("yes")
}else {
    console.log("no")
}

//Gold medal:
if(typeof "dog" === "string") {
    console.log("This is a string");
} else{
    console.log("This is not a string")
}

if(typeof "true" === "boolean") {
    console.log("This is a boolean");
} else {
    console.log("This is not a boolean")
}

if( "s" > 12) {
    console.log("Is greater than");
} else {
    console.log("Is not greater than")
}
