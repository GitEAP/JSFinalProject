"use strict";
alert("welcome to Generic Fantasy 1. What is your name?");
var userName;
//event
var newUserName = function enterName() {
    userName = prompt("Enter Your Name:");
    player.name = userName;
    alert("Welcome " + player.name);
    console.log(player.name);
    console.log("Health: " + player.health + "%");
    console.log("Energy: " + player.energy + "%");
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
var enemie1 = new Enemies;
var enemie2 = new Enemies;
var enemie3 = new Enemies;
//stores enemies into an array
var enemieList = [enemie1, enemie2, enemie3];

//function with argument, returns random number.
function randomNumber(range) {
    return Math.round(Math.random() * range);
}
//array of weapons.
var weaponList = ["sword", "wand", "crossbow","potion"];
//gets a weapon from the array






//function without arguments
var startMyGame = function() {
    //Lets player know what random weapon found.
    player.weapon = weaponList[randomNumber(weaponList.length - 1)];
    alert("On Your journey you find a " + player.weapon);
    console.log("Weapon: " + player.weapon);

    alert("You have come across 3 enemies");

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
        else if (enemie1.health <= 0 && enemie2.health <= 0 && enemie3.health <= 0 ) {
            gameMode = false;
        }
        //enter battle mode
        else {
            //User decides to attack or run away from enemey
            userDecision = prompt("Will you attack or try to run away?");
            decisionRandom = randomNumber(1);//50-50 chance of succeeding
            if (userDecision == "attack") {
                //successful attack
                if (decisionRandom == 0) {
                    alert("You attack the enemies with your " + player.weapon);
                    //for loop to attack each enemie
                    for (var i = 0; i < 3; i++) {
                        userDamage = randomNumber(60);//upto 60% damage to each enemies
                        enemieList[i].health -= userDamage;
                        console.log("Enemie" + (i + 1) + " has " + enemieList[i].health + "% health");
                    }
                }
                //failed attack
                else {
                    alert("You missed, and the enemies attack you");
                    userDamage = randomNumber(30);//upto 30% total damage to player
                    player.health -= userDamage;
                    alert("You know have " + player.health + " health");
                    console.log(player.name + "'s health: " + player.health + "%");
                }
            }
            else if (userDecision == "run" || userDecision == "run away"){
                //able to run
                if (decisionRandom == 0) {
                    alert("You were able to run away");
                    alert("but later on you run into the previous enemies");
                    player.energy -= 30;
                    console.log("Energy: " + player.energy);
                }
                //running away failed
                else {
                    alert("You couldn't run away, and the enemies attack you");
                    userDamage = randomNumber(30);//upto 30% total damage to player
                    player.health -= userDamage;
                    console.log(player.name + "'s health: " + player.health + "%");
                }
            }
        }//closes else statement
    }//Closes while loop
    switch (gameMode = false) {
        case player.health <= 0:
            alert("Game over, the enemies defeated you.");
            break;
        case player.energy <= 0:
            alert("Game over, you got too tired to fight and the enemies defeated you.");
            break;
        default:
            alert("Congratulations, you have defeated the enemies!")
            break;
    }//closes swith statement
}//closes function.

//calls the function after user clicks start game.
var startButton = document.getElementById("start");
startButton.addEventListener("click", startMyGame);
