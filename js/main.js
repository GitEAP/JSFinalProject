
alert("welcome to Generic Fantasy 1. What is your name?");
var userName;

var newUserName = function enterName() {
    this.userName = prompt("Enter Your Name:");
};

userName.addEventListener("click", newUserName);

//Creates object for the player (object literal)
var player = [
    name: this.userName,
    health: 100,
    energy: 100
]


//Object constructer to make enemies.
var Enemies = [
    health: 100,
    energy: 100
    ];
var enemie1 = new Enemies;
var enemie2 = new Enemies;
var enemie3 = new Enemies;

//function with argument, returns random number.
function randomNumber(range) {
    return Math.round(Math.random() * range);
}
//array of weapons.
var weaponList = ["sword", "wand", "crossbow","potion"];
//gets a weapon from the array
var weapon = weaponList[randomNumber(weaponList.length - 1)];


var gameMode = true;
while (gameMode) {
    if (player.health == 0) {
        gameMode = false;
    }
    else {

//Player finds 3 enemies
//player decides to attack or ignore
//function without function
//switch statement
//for loop that attacks each enemy and subtracts health

    }
}



