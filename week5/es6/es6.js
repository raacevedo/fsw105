// //1
// const name = "John"
// let age = 101

// function runForLoop(pets) {
//     const petObjects = []
//     for(let i=0; i <pets.length; i++) {
//         const pet = { type: pets[i]}
//         name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])
console.log("======")

// //2
const carrots = ["bright orange", "ripe", "rotten"];

mapVegetables = arr => {
    return arr.map(carrot  => {
        return { type: "carrot", name: carrot}
    });
}
console.log(mapVegetables([carrots]));
console.log("======")

//3
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

filterForFriendly = arr => {
    return arr.filter(person => {
        return person.friendly
    })
}
console.log(filterForFriendly)
console.log("======")

//4

let doMathSum = (a, b) => { return a + b };

let produceProduct = (a,b) => { return a + b };

console.log(doMathSum([3,4,5,6]))
console.log("======")

//5
let fname = "Jane";
let lname = "Doe";
let age = 100;

console.log("Hi," + fname + lname +". How does it feel to be" + age + "?")

//6
let name = "Jane Doe";
const age = 100;

const greeting = `Hi ${name}. How does it feel to be ${age}?`

console.log(greeting)

//7
const animals = [
    {
        type: "dog",
        name: "Theodore"
    },
    {
        type: "cat",
        name: "Whiskers"
    },
    {
        type: "pig",
        name: "Piglette"
    },
    {
        type: "dog",
        name: "Sparky"
    }
];

let filterForDogs = (arr) => arr.filter(animal => (animal.type === "dog" ? true :false))

    console.log(filterForDogs)
