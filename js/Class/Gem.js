'use strict';


// Gem base super Constructor
var Gem = function () {    
    this.sprite = 'images/Gem Blue.png';
    this.x = getRandomXGemCoordinate();
    this.y = getRandomYCoordinate() ;
    this.score = 10;    
    var gemShown = false;
    
}

// Get gems position
Gem.prototype.getPosition = function () {    
    return [this.x, this.y];
} 

// Shows the gem
Gem.prototype.showGem = function(){     
        this.render();    
}

// Gets the gems new position
Gem.prototype.getNewGemPosition = function(){
    // this.x = 225;
    // this.y = 160;
    
    this.x = getRandomXCoordinate();
    this.y = getRandomYCoordinate();  
    
    this.gemShown = true;
}
   
// Hides the gem
Gem.prototype.hideGem = function(){
    this.x = 700;
    this.y = 700;    
    this.render();
}

// Renders the gem to the screen
Gem.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


// Returns the gems score
Gem.prototype.getGemScore = function () {
    return this.score;
}


// Gem meduim score sub class constructor
var GemMeduim = function () {
    this.sprite = 'images/Gem Green.png';
    this.gemScore = 20;
    Gem.call(this);
}

GemMeduim.prototype = Object.create(Gem.prototype);
GemMeduim.prototype.constructor = GemMeduim;



// Gem High score sub class constructor
var GemHigh = function (x, y) {

    this.sprite = 'images/Gem Orange.png';    
    this.gemScore = 30;
    Gem.call(this);
}

GemHigh.prototype = Object.create(Gem.prototype);
GemHigh.prototype.constructor = GemHigh;
