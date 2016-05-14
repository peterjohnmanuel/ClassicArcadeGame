'use strict';

var Life = function () {
    this.sprite = 'images/Heart.png';
    this.x = getRandomXCoordinate();
    this.y = getRandomYCoordinate();  
    this.heartShown = false;
    this.getNewHeartPosition();  
}

Life.prototype.getPosition = function () {
    return [this.x, this.y];
}

Life.prototype.showHeart = function () {
    this.render();
}

Life.prototype.getNewHeartPosition = function () {
    this.x = getRandomXCoordinate();
    this.y = getRandomYCoordinate();    
}

Life.prototype.hideHeart = function () {
    this.x = 600;
    this.y = 600;
    this.render();
    this.heartShown = false;
}

Life.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
