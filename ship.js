(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});


  var Ship = Asteroids.Ship = function(x, y) {

    Asteroids.MovingObject.call(this,x,y,Ship.RADIUS,Ship.COLOR);
    this.dx = 1;
    this.dy = 1;
  };

  Ship.addShip = function (x, y) {
    var ship = new Ship(x, y);
    return ship;
  };


  Ship.COLOR = "blue";
  Ship.RADIUS = 20;

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.fireBullet = function(game) {
    var bullet = Asteroids.Bullet.addBullet(this.x, this.y,game);
    return bullet;
  }



})(this);