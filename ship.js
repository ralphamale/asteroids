(function(root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});


  var Ship = Asteroids.Ship = function(x, y) {

    Asteroids.MovingObject.call(this,x,y,Ship.RADIUS,Ship.COLOR);

  }

  Ship.addShip = function (x, y) {
    ship = new Ship(x, y);
    return ship;
  };

  // Asteroid.randomAsteroid = function(dimX, dimY) {
//     var x = Math.random() * dimX;
//     var y = Math.random() * dimY;
//     var asteroid = new Asteroid(x, y);
//     asteroid.randomVec();
//     return asteroid;
//   }
Ship.COLOR = "blue";
Ship.RADIUS = 20;



  Ship.inherits(Asteroids.MovingObject);



})(this);