var peopleWhoWantToSeeMadMaxFuryRoad =[
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },{
        name: "Sam",
        age: 30,
        gender: "male"
    },{
        name: "Suzy",
        age: 4,
        gender: "female"
    }
]
//Exercize 1
for(var i =0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log("old enough")
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log("not old enough")
    }
}

//Exercize 2
for(var i =0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max")
    } else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max")
    }
}

//Exercize 3 for males
for(var i =0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. HE'S good to see Mad Max Fury Road.")
        }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let Him in.")
        }
}

//Exercize 3 for females
for(var i =0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++ ){
    if(peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury Road.")
        }else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let HER in.")
        }
}

//Exercize 4

for (var i = 0; i < 101; i++){
    if(i % 2 !==0){
        console.log(i + " odd")
    }else if(i % 2 ===0){
        console.log(i + " even")
    }
}


