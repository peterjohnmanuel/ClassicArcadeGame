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
    this.level = 0;
    this.playerInputDisabled = false;
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

// Get's player score and update player avatar based on level
Player.prototype.updateScore = function (gemScore) {
    this.score = this.score + gemScore;

    switch (true) {
        case this.score < 500: this.sprite = 'images/char-boy.png';
            this.level = 1;
            break;
        case this.score < 1000: this.sprite = 'images/char-cat-girl.png';
            this.level = 2;
            break;
        case this.score < 1500: this.sprite = 'images/char-horn-girl.png';
            this.level = 3;
            break;
        case this.score < 2000: this.sprite = 'images/char-pink-girl.png';
            this.level = 4;
            break;
        case this.score < 2500: this.sprite = 'images/char-princess-girl.png';
            this.level = 5;
            break;
    }
}

Player.prototype.getScore = function () {
    return this.score;
}

Player.prototype.getLevel = function () {
    return this.level;
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

    if (this.life < 0)
        this.playerInputDisabled = true;
}

// Add Life to player
Player.prototype.addLife = function () {
    this.life = this.life + 1;
}

// Add Life to player
Player.prototype.getLife = function () {
    return this.life;
}

// Player dead
Player.prototype.dead = function () {
    this.x = 700;
    this.y = 700;
    this.render();    
}

Player.prototype.handleInput = function (key) {

    if (!this.playerInputDisabled) {
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
}