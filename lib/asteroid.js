(function () {
  var Asteroids;
  if (typeof(window) === 'undefined') {
    Asteroids = global.Asteroids = (global.Asteroids || {});
  } else {
    Asteroids = window.Asteroids = (window.Asteroids || {});
  }

  var Asteroid = Asteroids.Asteroid = function (options) {
    options.radius = Asteroid.RADIUS;
    var random_index = Math.floor(Math.random()*Asteroid.COLORS.length);
    options.color = Asteroid.COLORS[random_index]

    Asteroids.MovingObject.call(this, options);
  };

  Asteroid.COLORS = ["#464646","#656464","#8a8a8a","#aaaaa9","#c7c7c7","#eaeaea"];
  Asteroid.RADIUS = 25;
  Asteroid.SPEED = 4;

  Asteroid.randomAsteroid = function (game) {
    return new Asteroid({
      pos: game.randomPosition(),
      vel: Asteroids.Util.randomVec(Asteroid.SPEED),
      game: game
    });
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function (otherObject) {
    if (otherObject.constructor !== Asteroids.Ship) {
      return;
    }

    otherObject.relocate();
  }
})();
