(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});


  var Ship = Asteroids.Ship = function(x, y) {

    Asteroids.MovingObject.call(this,x,y,Ship.RADIUS,Ship.COLOR);
    this.dx = 5;
    this.dy = 5;
    this.speed = Math.sqrt(Math.pow(this.dx, 2) + Math.pow(this.dy, 2));



    //sqrt(v.x ** 2 + v.y ** 2).

  };

  Ship.addShip = function (x, y) {
    var ship = new Ship(x, y);
    return ship;
  };


  Ship.COLOR = "blue";
  Ship.RADIUS = 20;

  Ship.inherits(Asteroids.MovingObject);

  Ship.prototype.fireBullet = function(game) {

    var x = this.dx;
    var y = this.dy;

    var angle = Math.acos( x / Math.sqrt(Math.pow(x,2) + Math.pow(y,2)) );


    var bullet = Asteroids.Bullet.addBullet(this.x, this.y, angle, game);
    return bullet;
  }



})(this);