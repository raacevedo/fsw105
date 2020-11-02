var readlineSync = require('readline-sync');

const playerName = readlineSync.question("What is your name? ")

const helloMessage = `${playerName}, Welcome to the Escape Room!`
console.log(helloMessage);



let notDead = true;
let foundKey = false;

while (notDead == true){
    const gameMenu = readlineSync.keyIn(`Press 1 to Put hand in the hole\nPress 2 to Find the key\nPress 3 to Open the door:`, {limit: `$(<1-2-3>)`});
    if(gameMenu == 1){
        //player is dead
        //Game is over
        notDead = false;
        console.log(`I am sorry, ${playerName}. The game is over. You are dead!`);

    }else if (gameMenu == 2 && foundKey == false){
        //player opted for menu option 2
        //player does not have the key
        foundKey = true;
        console.log(`${playerName}, Good job! You have found the key. Please continue on by pressing option 3.`);


    }else if (gameMenu == 2 && foundKey == true){
        //player opted for menu option 2
        //player already has the key
        //display a message to inform the player the s/he needs to proceed to option 3
        console.log(`${playerName}, with the key in hand, please continue on to option 3. There is nothing further to complete in this option.`);

    }else if (gameMenu == 3 && foundKey == false){
        //player opted for option 3
        //player does not have the key yet
        console.log(`${playerName}, you can not continue onto this lever without first completing option 2 and finding the key.`);


    }else if (gameMenu == 3 && foundKey == true){
        //player opted for option 3 
        //player does have the key
        //player has escaped the room successfully
        console.log(`Congratulation, you have found the key and opened the door. The game is complete.`);

        notDead = false
    }
}

