'use strict';


// Gem base super Constructor
var Gem = function () {
    this.sprite;
    this.x = getRandomXGemCoordinate();
    this.y = getRandomYCoordinate();
}

// Get gems position
Gem.prototype.getPosition = function () {
    return [this.x, this.y];
}

// Shows the gem
Gem.prototype.showGem = function () {
    this.render();
}

// Gets the gems new position
Gem.prototype.getNewGemPosition = function () {
    this.x = getRandomXGemCoordinate();
    this.y = getRandomYCoordinate();
    this.render();
}

// Hides the gem
Gem.prototype.hideGem = function () {
    this.x = 900;
    this.y = 900;
    this.render();

    setTimeout(this.getNewGemPosition.bind(this), 5000);
}

// Renders the gem to the screen
Gem.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Returns the gems score
Gem.prototype.getGemScore = function () {
    return this.score;
}


// Gem Low score sub class constructor
var GemLow = function () {
    this.sprite = 'images/Gem Blue.png';
    this.score = 10;
    Gem.call(this);
}

GemLow.prototype = Object.create(Gem.prototype);
GemLow.prototype.constructor = GemLow;

// Gem meduim score sub class constructor
var GemMeduim = function () {
    this.sprite = 'images/Gem Green.png';
    this.score = 20;
    Gem.call(this);
}

GemMeduim.prototype = Object.create(Gem.prototype);
GemMeduim.prototype.constructor = GemMeduim;

// Gem High score sub class constructor
var GemHigh = function (x, y) {

    this.sprite = 'images/Gem Orange.png';
    this.score = 30;
    Gem.call(this);
}

GemHigh.prototype = Object.create(Gem.prototype);
GemHigh.prototype.constructor = GemHigh;
 