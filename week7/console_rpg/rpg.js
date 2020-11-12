var readlineSync = require('readline-sync');

const name = readlineSync.question(`Tell me your name. `);

readlineSync.question(`Hello ` + name + `. Welcome to The Fight! Can you make it till the end? Press Enter if you dare!`);

const villains = ["Diabo", "Rat King", "Sharky", "Clown Killer"];
const valubles = ["Life Cookie", "Power Sword", "Super Shield", "Magic Flute"];
var prize = [];
let playerLife = 50;
const options = ["Walk", "Exit", "Print"];
let grab = valubles[Math.floor(Math.random() * valubles.length)];

function game(){
    const attackLoss = Math.floor(Math.random() * (5 - 4 + 2) + 5);
    const villain = villains[Math.floor(Math.random() * villains.length)];
    let villainsLife = 50;
    const villainsPower = Math.floor(Math.random() * (5 - 3 + 4) + 5);

    const menu = readlineSync.keyInSelect(options, "What is your next move?");
    if (options[menu] == 'Exit') {
        return playerLife = 0;
    }else if (options[menu] == 'Print'){
        console.log(name + ": \n" + playerLife + "\nValubles: " + grab);
    }else if (options[menu] == 'Walk'){
        let key = Math.random();
        if (key <= .3){
            console.log("Going for a walk.");
        }else if(key >= .3){
            console.log(villain + " wants to fight!");

                while(villainsLife > 0 && playerLife > 0){

                    const player = readlineSync.question('What do you want to do? Enter "r" to run or "f" to fight: ');

                    switch (player){
                        case "r": //to run
                            const run = Math.random();
                            if(run < .5){
                                console.log('Before you could walk away ' + villain + ' attacks you with ' + villainsPower);
                            }else {
                                console.log('You ran far away!');
                                break;
                            }
                        
                        case "f": //fight the villain
                           villainsLife -= attackLoss; 
                           console.log('You attacked ' + villain + ' with ' + attackLoss);
                           
                           playerLife -= villainsPower;
                           console.log('You have been attacked ' + villainsPower);

                           if (villainsLife <= 0){
                               console.log('You defeated ' + villain + ' \n ' + villain + ' has dropped: ' + grab);
                               let raid = Math.random();
                               if (raid <= .3){
                                    prize.push(grab);
                               }
                               }else if(playerLife <= 0){
                                   console.log('You are dead! ' + villain + ' has beat you! The game is over!')
                               }

                    }
                    }
                }
        }
    }



while(playerLife >=50){
    playerRestore = function(){
        playerActive = true;
        playerLife = 50;
    };
    playerRestore();
    game();
}
game()