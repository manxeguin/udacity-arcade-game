
var sizeCol = 101;
var sizeRow = 83;
var numCol = 5;
var numRow = 6;
// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.width = 80;
    this.height = 45;
    this.speed = Math.floor((Math.random() * 200) + 100);
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x+ (1*dt*this.speed);
    if (this.x>sizeCol*numCol){
        this.x = -100;
        this.speed = Math.floor((Math.random() * 200) + 150);

    }
    //console.log(this.x);


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function() {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/char-boy.png';
    this.x = 400;
    this.y = 400;
};


// Parameter: dt, a time delta between ticks
Player.prototype.update = function() {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {

   switch (key) {
    case "down":
        if (this.y+10<(sizeRow*numRow-60))
            this.y = this.y+10;
        break;
    case "up":
        if (this.y-10>0)
            this.y = this.y-10;
        break;
    case "left":
        if (this.x-10>0)
            this.x = this.x-10;
        break;
    case "right":
        if (this.x+10<(sizeCol*numCol)-70)
            this.x = this.x+10;
        break;
}
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var enemy1 //= new Enemy(0,70,25);
var enemy2 //= new Enemy(-100,150,60);
var enemy3 //= new Enemy(-200,200,100);
var allEnemies = [];
//allEnemies.push(enemy1);
//allEnemies.push(enemy2);
//allEnemies.push(enemy3);

var resetGame = function(){
    player.x = 400;
    player.y = 400;
    if (allEnemies.length == 0){
        enemy1 = new Enemy(0,50,25);
        enemy2 = new Enemy(-100,170,60);
        enemy3 = new Enemy(-200,280,100);
        allEnemies.push(enemy1);
        allEnemies.push(enemy2);
        allEnemies.push(enemy3);
    }
    
}




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
