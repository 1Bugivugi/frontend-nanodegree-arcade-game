// Enemies our player must avoid
class Enemy {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    constructor(x, y, speed){
      this.sprite = 'images/enemy-bug.png';
      this.x = x;
      this.y = y;
      this.speed = Math.round(Math.random() * 3) + 1;
    };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks (time between frames)
    update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
      this.x = (this.x + dt * this.speed * 150) % (500)
    }


// Draw the enemy on the screen, required method for game
    render() {
      ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class Player {
  constructor(x, y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
  }

  update(){

  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(destination){
    switch (destination) {
      case 'up': {
        (this.y - 83 > -5) ? this.y -= 83 : this.y -=83 && reload();
        break;
      }
      case 'down': {
        (this.y + 83 <= 400) ? this.y += 83 : false;
        break;
      }
      case 'right': {
        (this.x + 101 < 505) ? this.x += 101 : false;
        break;
      }
      case 'left': {
        (this.x - 101 > -5) ? this.x -= 101 : false;
        break;
      }
    }
  }
};

/*
 *  Modal Popup
 */

const reload = () => {
  swal("You won!", "Congrats!", "success", { // didnt quite get where to use template literals here
        buttons: {
          restart: {
            text: "Play again?",
            value: "restart"
          }
        },
      })
      .then(function(){
        window.location.reload();
      });
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
const allEnemies = [];
const enemy1 = new Enemy(-50, 63);
const enemy4 = new Enemy(-180, 63);
const enemy2 = new Enemy(-70, 145)
const enemy5 = new Enemy(-180, 145)
const enemy3 = new Enemy(-60, 228)
const enemy6 = new Enemy(-240, 228)
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6);
// Place the player object in a variable called player
let player = new Player(202, 400);



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
