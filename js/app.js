'use strict';

var min = 100;
var max = 500;

var fastEnemyXcoordinate = -300;
var mediumEnemyXcoordinate = -150;
var slowEnemyXcoordinate = -50;


// Enemies our player must avoid
var Enemy = function (x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.x = this.x + (this.speed * dt);
    
    if(this.x > 510)
        this.reset();
    else
        this.render();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function(){
 
    this.x = -200;
    this.speed = getRandomArbitrrary(min, max);
    this.render();

}

function getRandomArbitrrary(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 205;
    this.y = 380;
}

Player.prototype.update = function () {
    this.x;
    this.y;
}

Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function (key) {

    console.log(this.x, this.y);

    if (this.x == 407)
        console.log("cannot move right");

    if (this.x == 3)
        console.log("cannot move left");

    if ((this.y - 83) == 48)
        console.log("cannot move up");
        
    if (this.y == 380)
        console.log("cannot move down");

    switch (key) {
        case 'up': this.y = this.y - 83;
            this.render();
            break;
        case 'down': this.y = this.y + 83;
            this.render();
            break;
        case 'left': this.x = this.x - 101;
            this.render();
            break;
        case 'right': this.x = this.x + 101;
            this.render();
            break;
    }
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

 var player = new Player();

 var enemy1 = new Enemy(-50 , 214 , 100);
 var enemy2 = new Enemy(-50 , 131 , 200);
 var enemy3 = new Enemy(-150 , 48  , 300);
 var enemy4 = new Enemy(-50, 214 , 100);
 var enemy5 = new Enemy(-50, 48 , 200);


var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});