(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {})

  var Bullet = Asteroids.Bullet = function(x,y, game) {

    Asteroids.MovingObject.call(this,x,y,Bullet.RADIUS, Bullet.COLOR);
    this.dx = 5;
    this.dy = 5;
    this.game = game;
  };

  Bullet.addBullet = function(x,y) {
    var bullet = new Bullet(x,y);
    return bullet;
  }

  // Ship.addShip = function (x, y) {
  //   ship = new Ship(x, y);
  //   return ship;
  // };

  Bullet.COLOR = "orange";
  Bullet.RADIUS = 10;

  Bullet.inherits(Asteroids.MovingObject);



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
