// Enemy class
var Enemy = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/enemy-bug.png';
    this.multiplier = Math.floor((Math.random() * 15) + 10);
};

// Enemy methods
Enemy.prototype = {
    update: function(dt) {
        this.x = this.x + 40 * dt * this.multiplier;
        // Reset the enemy position
        if (this.x > 700) {
            this.x = -150;
        }
        // Collision control
        if (this.x > player.x - 50 && this.x < player.x + 50 && this.y > player.y - 50 && this.y < player.y + 50) {
            player.x = player.xStart;
            player.y = player.yStart;
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
    // Set reset position
    this.xStart = x;
    this.yStart = y;

    // Draw the poor fella
    this.sprite = 'images/char-boy.png';
};

// Player methods
Player.prototype = {
    update: function() {
        this.x = this.x;
        this.y = this.y;
    },

    // Draw the player on the screen
    render: function() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    },

    handleInput: function(controls) {
        // Movement controls
        switch (controls) {
            case 'up':
                this.y -= 85;
                break;
            case 'down':
                this.y += 85;
                break;
            case 'right':
                this.x += 100;
                break;
            case 'left':
                this.x -= 100;
        }
        // Confine players movement
        if (this.x === 500) {
            this.x = 400;
        } else if (this.x < 0) {
            this.x = this.xStart;
        } else if (this.y > 400) {
            this.y = 390;
        } else if (this.y < 0) {
            alert("Well done! You showed those bugs who's the boss!");
            this.x = this.xStart;
            this.y = this.yStart;
        }
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


// Bugs
var bug1 = new Enemy(150, 50);
var bug2 = new Enemy(50, 140);
var bug3 = new Enemy(300, 140);
var bug4 = new Enemy(0, 50);

var allEnemies = [bug1, bug2, bug3, bug4];


// Player
var player = new Player(0, 390);
