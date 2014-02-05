(function(root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Game = Asteroids.Game = function (canvasEl) {
    this.ctx = canvasEl.getContext("2d");
    this.asteroids = [];

  };

  Game.DIM_X = 500;
  Game.DIM_Y = 500;


  Game.prototype.addAsteroids = function(numAsteroids) {

    for (var i = 0; i < numAsteroids; i++) {
      this.asteroids.push(Asteroids.Asteroid.randomAsteroid(Game.DIM_X,Game.DIM_Y));
    };

  }

  Game.prototype.draw = function() {
    this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

   var that = this;
    this.asteroids.forEach(function (asteroid) {
      asteroid.draw(that.ctx);
    })

    this.ship.draw(this.ctx);

    // this.circles.forEach(function (circle) {
    //    circle.render(ctx);
    //  });

  };

  Game.prototype.move = function () {
    var that = this;
    this.asteroids.forEach(function (asteroid) {
      asteroid.move(that.ctx);
    })

    //////////////move SHIP
  };

  Game.prototype.step = function () {
    this.move();
    this.draw();
    this.checkCollisions();
  };

  Game.FPS = 30;

  Game.prototype.start = function () {
    //this.ship = new Asteroids.Ship(Game.DIM_X/2, Game.DIM_Y/2);
    this.ship = Asteroids.Ship.addShip(250,250);

    this.addAsteroids(5);

    var that = this;
    window.setInterval(function() {
      that.step();
    }, 30); //Game.FPS

  };

  Game.prototype.checkCollisions = function() {

    this.asteroids.forEach(function(asteroid) {

      if(asteroid.isCollidedWith(this.ship)) {
        //console.log("asdfdsafa");
        this.ship.color = "black";
        alert("You hit asteroid");
      }

    });

  };

})(this);
