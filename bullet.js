(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {})

  var Bullet = Asteroids.Bullet = function(x,y, dx, dy, game) {

    Asteroids.MovingObject.call(this,x,y,Bullet.RADIUS, Bullet.COLOR);
    this.dx = 0;
    this.dy = -5;
    this.game = game;
  };
  //(this.x, this.y, this.dx, this.dy, game)


  // ids.Bullet.addBullet(this.x, this.y, angle, game);
  Bullet.addBullet = function(x,y, angle) {


    var dx = Math.cos(angle) * Bullet.SPEED;
    var dy = Math.sin(angle) * Bullet.SPEED;


    var bullet = new Bullet(x, y, dx, dy);
    return bullet;
  }

  // Ship.addShip = function (x, y) {
  //   ship = new Ship(x, y);
  //   return ship;
  // };
  Bullet.SPEED = 7;
  Bullet.COLOR = "orange";
  Bullet.RADIUS = 10;
  Bullet.dx = 5;
  Bullet.dy = 5;

  Bullet.inherits(Asteroids.MovingObject);

  Bullet.changeShipDir = function(dx, dy) {
    Bullet.dx = dx;
    Bullet.dy = dy;
  };

  Bullet.prototype.hitAsteroids = function(asteroids) {
    var game = this.game;
    var bullet = this;
    asteroids.forEach(function(asteroid) {
      if (bullet.isCollidedWith(asteroid)) {
        game.removeAsteroid(asteroid);
        game.removeBullet(bullet);
      }
    });
  };



})(this);
