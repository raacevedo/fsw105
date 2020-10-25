//Section A .filter()
//1
function fiveAndGreaterOnly(arr){
    const result = arr.filter(function(num){
        if(num >=5){
            return true;
        }
    });
    return result;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));
console.log("======")

//2
function evensOnly(arr){
    const result = arr.filter(function(num){
        if(num % 2 === 0){
            return true
        }
    })
    return result
}
console.log(evensOnly([3, 6, 8, 2]));
console.log("======")

//Extra credit
function ofAge(arr){
    let result = arr.filter(function(ofAge){
        if(ofAge.age >= 17){
            return true
        }
    })
    return result
}
console.log(ofAge([
    {name: "Angelina Jolie", age: 80},
    {name:"Eric Jones", age: 2},
    {name:"Paris Hilton", age: 5},
    {name:"Kayne West", age: 16},
    {name:"Bob Ziroll", age: 100}
]));
console.log("======")

//Section B .map()
//1
function doubleNumbers(arr){
    const result = arr.map(function(num){
        return num * 2;
    })
return result
}
console.log(doubleNumbers([2, 5, 100]));
console.log("======")

//2
function stringItUp(arr){
    const result = arr.map(function(num){
        return num + "";
    })
    return result
}

console.log(stringItUp([2, 5, 100]));
console.log("======")


//3
function capitalizeNames(arr){
    const result = arr.map(function(word){
        return word[0].toUpperCase()+ word.substring(1).toLowerCase()
    })
    return result;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
console.log("======")

// Extra Credit 1
function namesOnly(arr){
    const result = arr.map(function(nameOnly){
        return nameOnly.name
    })
return result
}
console.log(namesOnly([
    {   
        name: "Angelina Jolie",
        age: 80
    },

    {   
        name: "Eric Jones",
        age: 2
    },

    {
        name: "Paris Hilton",
        age : 5
    },

    {
        name: "Kayne West",
        age: 16
    },

    {
        name: "Bob Ziroll",
        age: 100
    }
]));
console.log("======")

//Extra Credit 2
function makeStrings(arr){
    const result = arr.map(function(okToSee){
        if(okToSee.age >= 17) {
            return okToSee.name + " ok to see The Matrix";
        } else (okToSee.age < 17)
            return okToSee.name + " not ok to see The Matrix";
    })
    return result
}
console.log(makeStrings([
    {   
        name: "Angelina Jolie",
        age: 80
    },

    {   
        name: "Eric Jones",
        age: 2
    },

    {
        name: "Paris Hilton",
        age : 5
    },

    {
        name: "Kayne West",
        age: 16
    },

    {
        name: "Bob Ziroll",
        age: 100
    }
]));
console.log("======")

// Section C .reduce()
// 1
function total(arr) {
    const result = arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0)
    return result
}

console.log(total([1, 2, 3]));
console.log("======")

//2
function stringConcat(arr){
    const result = arr.reduce(function(a, b){
        return a + b;
    },'')
return result
}


console.log(stringConcat([1, 2, 3]));
console.log("=======")

//3
function totalVotes(arr){
    const result = voters.reduce(function(final, voters){
        if(voters.voted == true){
            final++
        }
        return final
    }, 5)
    return result
}

var voters = [
    {name: 'Bob', age: 30, voted: true},
    {name: 'Jake', age: 32, voted: true},
    {name: 'Kate', age: 25, voted: false},
    {name: 'Sam', age: 20, voted: false},
    {name: 'Phil', age: 21, voted: true},
    {name: 'Ed', age: 55, voted: true},
    {name: 'Tami', age: 54, voted: true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false},
];

console.log(totalVotes(voters));
console.log("======")

// Section D .sort()
// 1
function leastToGreatest(arr){
    let result = arr.sort(function(total, num) {
        return total - num
    })
    return result
}
console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));
console.log("======")

//2
function greatestToLeast(arr){
    let result = arr.sort(function(total, num) {
        return num - total
    })
    return result
}
console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));
console.log("======")

//3
function lengthSort(arr){
    const result = arr.sort(function(a, b){
        return a.length - b.length;
    })
    return result
}
console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));
console.log("======")

//Extra Credit
const alphabetical = ["dog", "wolf", "by", "family", "eaten"]

alphabetical.sort()

console.log(alphabetical)
