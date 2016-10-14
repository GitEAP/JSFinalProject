"use strict";
alert("Welcome to Generic Fantasy 1. What is your name?");
var userName;
//event
var newUserName = function enterName() {
    userName = prompt("Enter Your Name:");
    player.name = userName;
    alert("Welcome " + player.name);
}

//event listener
var nameButton = document.getElementById("name");
nameButton.addEventListener("click", newUserName);

//Creates object for the player (object literal)
var player = {
    name: "",
    health: 100,
    energy: 100,
    weapon: ""
}

//Object constructer to make enemies.
function Enemies() {
    this.health = 100,
    this.energy = 100
}

//makes 3 new enemies.
var enemy1 = new Enemies;
var enemy2 = new Enemies;
var enemy3 = new Enemies;
//stores enemies into an array
var enemyList = [enemy1, enemy2, enemy3];
enemy1.name = "Giant slug";
enemy2.name = "Kraken";
enemy3.name = "Small Dragon";

//function with argument, returns random number.
function randomNumber(range) {
    return Math.round(Math.random() * range);
}
//array of weapons.
var weaponList = ["sword", "wand", "crossbow", "potion"];


//function without arguments
function battleMode() {
    //Variables used inside while loop
    var userDamage;
    var userDecision;
    var decisionRandom;
    var gameMode = true;
    while (gameMode) {
        //checks to see if the player is dead or too weak to fight
        if (player.health <= 0 || player.energy <= 0) {
            gameMode = false;
        }
        //checks to see if the enemies have been defeated
        else if (enemy1.health <= 0 && enemy2.health <= 0 && enemy3.health <= 0) {
            gameMode = false;
        }
        else {
            //enter battle mode
            //User decides to attack or run away from enemey
            userDecision = prompt("Will you attack or try to run away?");
            decisionRandom = randomNumber(1);//50-50 chance of succeeding

        }

        if (userDecision == "attack") {
            //successful attack
            if (decisionRandom == 0) {
                alert("You attacked the enemies with your " + player.weapon);
                //for loop to attack each enemy
                for (var i = 0; i < 3; i++) {
                    userDamage = randomNumber(60);//upto 60% damage to each enemies
                    enemyList[i].health -= userDamage;
                    console.log("Enemy" + (i + 1) + " has " + enemyList[i].health + "% health");
                }
            }
            //failed attack
            else {
                alert("You missed, and the enemies attack you");
                userDamage = randomNumber(30);//upto 30% total damage to player
                player.health -= userDamage;
                console.log("Health: " + player.health + "%");
                alert("You know have " + player.health + " health");
            }
        }
        else if (userDecision == "run" || userDecision == "run away") {
            //able to run
            if (decisionRandom == 0) {
                alert("You were able to run away, but you lost some of your energy getting away.");
                player.energy -= 30;
                console.log("Energy: " + player.energy);
                alert("The monsters followed you and caught up to you.");
            }
            //running away failed
            else {
                alert("You couldn't run away, and the enemies attack you");
                userDamage = randomNumber(30);//upto 30% total damage to player
                player.health -= userDamage;
                console.log("Health: " + player.health + "%");
                alert("You know have " + player.health + " health");
            }
        
    }//closes else
}//Closes while loop
    switch (gameMode == false) {
        case player.health <= 0:
            alert("Game over, the enemies defeated you. Maybe the dream was just a dream.");
            break;
        case player.energy <= 0:
            alert("Game over, you got too tired to fight and the enemies defeated you. Maybe you should of trained before you went to the caves.");
            break;
        default:
            alert('Congratulations, you have defeated the enemies! You can now go back to town and marry the Majors daughter and be the "Hero of Napa"');
            break;
    }//closes swith statement
}//closes battleMode


var startMyGame = function() {
    if (player.name == "") {
        alert("Please enter your name.");
    }
    else if (player.name !== "") {
        alert("Your town has been under attack for the last couple of years. Nobody has seen the attackers but there was a local farmer who said they are monsters. He told you they came from the North. You remember the caves from the North. You have never been there.");
        alert('The following day the Major of the town made an annoucement that goes as follows: "People of Napa, Our town has been under attack for the last couple of years. I am here to call on a hero to save us from these monsters. He who champions will be greatly rewarded. They will be able to marry my daughter as the Hero of the town of Napa."');
        alert("You remember last night you had a dream where you were a hero and you got the girl of your dreams. Could that dream be a reality. Are you the hero who will save Napa? Was the dream part of destiny? Or is it just a fantansy?");
        alert("You decide to take the challenge, you wrote a letter to the major and you went of in your new adventure.");
        alert("...  ...  ...");
        console.log(player.name);
        console.log("Health: " + player.health + "%");
        console.log("Energy: " + player.energy + "%");
        //Lets player know what random weapon found.
        player.weapon = weaponList[randomNumber(weaponList.length - 1)];
        console.log("Weapon: " + player.weapon);
        alert("After hours and hours of walking, you find a " + player.weapon);
        alert("You start getting closer to the caves. An hour later you enter the caves. You come across the 3 monsters! They are a " + enemy1.name + ", " + enemy2.name + ", and a " + enemy3.name);
        battleMode();
    }
}//closes function.

//calls the function after user clicks start game.
var startButton = document.getElementById("start");
startButton.addEventListener("click", startMyGame);
