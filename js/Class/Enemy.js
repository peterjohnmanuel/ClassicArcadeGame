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
    this.life = 3; 
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