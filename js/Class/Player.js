'use strict';

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

// Player constructor
var Player = function () {
    this.sprite = 'images/char-boy.png';
    this.x = 205;
    this.y = 380;
    this.life = 3; 
    this.score = 0;
}

Player.prototype.update = function () {
    this.x;
    this.y;
}

Player.prototype.render = function () {

    if (this.y < 48) {
        this.reset()
    }
    else {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

Player.prototype.getPosition = function () {
    return [this.x, this.y];
}

Player.prototype.updateScore = function (gemScore) {
    
    console.log(gemScore);
    
    this.score = this.score + gemScore;
}

Player.prototype.getScore = function () {
    return this.score;
}


// Reset player to starting position and removes a life.
Player.prototype.reset = function () {
    this.x = 205;
    this.y = 380;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    this.removeLife();
}

// Remove a life from a player
Player.prototype.removeLife = function () {
    this.life = this.life - 1;
}

// Add Life to player
Player.prototype.addLife = function () {
    this.life = this.life + 1;
}

// Add Life to player
Player.prototype.getLife = function () {
    return this.life;
}

Player.prototype.handleInput = function (key) {
    
    var right = (this.x == 407) ? false : true;
    var left = (this.x == 3) ? false : true;
    var down = ((this.y + 83) > 380) ? false : true;

    switch (key) {
        case 'up':
                this.y = this.y - 83;
                this.render();
            break;
        case 'down':
            if (down) {
                this.y = this.y + 83;
                this.render();
            }
            break;
        case 'left':
            if (left) {
                this.x = this.x - 101;
                this.render();
            }
            break;
        case 'right':
            if (right) {
                this.x = this.x + 101;
                this.render();
            }
            break;
    }
}