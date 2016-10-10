"use strict";
alert("welcome to Generic Fantasy 1. What is your name?");
var userName;

var newUserName = function enterName() {
    this.userName = prompt("Enter Your Name:");
};

newUserName.addEventListener("click", newUserName);

var Enemies = function badEnemies() {

}

var enemie1 = new Enemies;
var enemie2 = new Enemies;
var enemie3 = new Enemies;
