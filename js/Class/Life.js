'use strict';

var Life = function () {    
    this.sprite = 'images/Heart.png';
    this.x = 101;
    this.y = 160;
}

Life.prototype.getPosition = function () {    
    return [this.x, this.y];
} 

Life.prototype.showHeart = function(){    
    this.render();
}

Life.prototype.hideHeart = function(){
    
    this.x = 600;
    this.y = 600;    
    this.render();
}

Life.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
