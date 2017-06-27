// Enemy class
var Enemy = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/enemy-bug.png';
  this.multiplier = Math.floor((Math.random() * 4) + 1);
};

// Enemy methods
Enemy.prototype = {
  update: function(dt) {
    this.x = this.x + 75 * dt * this.multiplier;
    // Reset the enemy position
    if(this.x > 700) {
      this.x = - 150;
    }
  },
  // Draw the enemy on the screen
  render: function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};


///////////////////////////////////////////////////////////////
// Player objects, methods start here
///////////////////////////////////////////////////////////////

// Player class
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-boy.png';
};

// Player methods
Player.prototype = {
  update: function(dt) {
    this.x = this.x;
    this.y = this.y;
  },

  render: function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  },

  handleInput: function(controls) {
    // Movement controls
    switch (controls) {
      case 'up':
        var move = this.y -= 85;
        break;
      case 'down':
        var move = this.y += 85;
        break;
      case 'right':
        var move = this.x += 100;
        break;
      case 'left':
        var move = this.x -= 100;
    }
    // Don't allow player move of the canvas
  }
};

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


///////////////////////////////////////////////////////////////
// Now instantiate your objects.
///////////////////////////////////////////////////////////////

// Player
var player = new Player(0, 390);

// Bugs
var bug1 = new Enemy(150, 50);
var bug2 = new Enemy(300, 140);
var bug3 = new Enemy(0, 220);

var allEnemies = [bug1, bug2, bug3];
