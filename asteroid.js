(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});




  var Asteroid = Asteroids.Asteroid = function Asteroid(x, y) {
    //
    // this.x = x;
    // this.y = y;
    Asteroids.MovingObject.call(this,x,y,Asteroid.RADIUS,Asteroid.COLOR);


  };

  Asteroid.inherits(Asteroids.MovingObject);

  Asteroid.COLOR = "red";
  Asteroid.RADIUS = 25;


  Asteroid.randomAsteroid = function(dimX, dimY) {
    var x = Math.random() * dimX;
    var y = Math.random() * dimY;
    var asteroid = new Asteroid(x, y);
    asteroid.randomVec();
    return asteroid;
  }

  Asteroid.prototype.randomVec = function() {
    this.dx = (Math.random() * 2) - 1;
    this.dy = (Math.random() * 2) - 1;
  }






})(this);




