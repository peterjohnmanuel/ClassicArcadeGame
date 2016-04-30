'use strict';

var min = 100;
var max = 500;

var fastEnemyInitialXcoordinate = -300;
var mediumEnemyInitialXcoordinate = -150;
var slowEnemyInitialXcoordinate = -50;


// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images   
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.    
    this.x = this.x + (this.speed * dt);

    if (this.x > 510)
        this.reset();
    else
        this.render();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Enemy.prototype.reset = function () {
    this.x = -200;
    this.speed = getRandomArbitrrary(min, max);
    this.render();
}

Enemy.prototype.getPosition = function () {
    return [this.x, this.y];
}

// Slow Paced Enemies Enemy subclass
var SlowEnemy = function (x, y) {
    this.speed = getRandomArbitrrary(50, 200);
    Enemy.call(this, x, y);
}

SlowEnemy.prototype = Object.create(Enemy.prototype);
SlowEnemy.prototype.constructor = SlowEnemy;


// Medium Paced Enemies Enemy subclass

// Constructor for Meduim paced Enemies
var MediumEnemy = function (x, y) {

    this.speed = getRandomArbitrrary(201, 350);
    Enemy.call(this, x, y);
}

MediumEnemy.prototype = Object.create(Enemy.prototype);
MediumEnemy.prototype.constructor = SlowEnemy;


// Fast Paced Enemies Enemy subclass

// Constructor for Fast paced Enemies
var FastEnemy = function (x, y, speed) {
    this.speed = getRandomArbitrrary(351, 500);
    Enemy.call(this, x, y);
}

FastEnemy.prototype = Object.create(Enemy.prototype);
FastEnemy.prototype.constructor = SlowEnemy;


// Get Speed of random speed of enemy
function getRandomArbitrrary(min, max) {
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

Player.prototype.getPosition = function () {
    return [this.x, this.y];
}

Player.prototype.reset = function () {
    this.x = 205;
    this.y = 380;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


Player.prototype.handleInput = function (key) {

    var canRender = true;


    if (this.x == 407)
        canRender = false;

    if (this.x == 3)
        canRender = false;

    if ((this.y - 83) == 48)
        canRender = false;

    if (this.y == 380)
        canRender = false;


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

var enemy1 = new SlowEnemy(-50, 214);
var enemy2 = new SlowEnemy(-50, 131);
var enemy3 = new MediumEnemy(-150, 48);
var enemy4 = new MediumEnemy(-50, 214);
var enemy5 = new FastEnemy(-50, 48);


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