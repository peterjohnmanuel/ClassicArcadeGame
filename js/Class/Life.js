'use strict';

var Life = function () {
    this.sprite = 'images/Heart.png';
    this.x = getRandomXCoordinate();
    this.y = getRandomYCoordinate();
    this.lifeLimit = 3;
}


Life.prototype.getPosition = function () {
    return [this.x, this.y];
}

// Shows the initial position of the heart.
Life.prototype.showHeart = function () {
    if (!(this.lifeLimit < 0)) {
        this.render();
    }
}

Life.prototype.getNewHeartPosition = function () {
    this.x = getRandomXCoordinate();
    this.y = getRandomYCoordinate();
    this.render();
}

// Hides and shows the new position of the heart
Life.prototype.hideHeart = function () {
    this.x = 600;
    this.y = 600;
    this.lifeLimit = this.lifeLimit - 1;
    this.render();
    if (!(this.lifeLimit < 0)) {
        setTimeout(this.getNewHeartPosition.bind(this), 5000);
    }
}

Life.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
