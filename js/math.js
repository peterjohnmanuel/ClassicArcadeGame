// Get Speed of random speed of enemy
function getRandomArbitrrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomXCoordinate(){
    return ( Math.floor(Math.random() * 5 ) * 101);
}

function getRandomYCoordinate(){
    return ( (Math.floor(Math.random() * 5 ) + 1 ) * 83);
}

function getRandomXGemCoordinate(){
    return (Math.floor(Math.random() * 5 ) * 101) + 12;
}