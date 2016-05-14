'use strict';


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();

// Life
var life = new Life();

// Gems

var gem = new Gem();

// Enemies
var enemy1 = new SlowEnemy(-50, 214);
var enemy2 = new SlowEnemy(-50, 131);
var enemy3 = new MediumEnemy(-150, 48);
var enemy4 = new MediumEnemy(-50, 214);
var enemy5 = new FastEnemy(-50, 48);


var allEnemies = [enemy1, enemy2, enemy3, enemy4, enemy5];
//var allGems = [enemy1, enemy2, enemy3, enemy4, enemy5];


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
    
    console.log(player.getPosition());
});