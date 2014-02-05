(function(root) {

  var Asteroids = root.Asteroids = (root.Asteroids || {});
  var Game = Asteroids.Game = function (canvasEl) {
    this.ctx = canvasEl.getContext("2d");
    this.asteroids = [];
    this.bullets = [];

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

    this.bullets.forEach(function (bullet) {
      bullet.draw(that.ctx);
    })

    // this.circles.forEach(function (circle) {
      //    circle.render(ctx);
      //  });

    };

    Game.prototype.move = function () {
      var that = this;
      this.asteroids.forEach(function (asteroid) {
        asteroid.move(that.ctx);
      })

      this.bullets.forEach(function (bullet) {
        bullet.move(that.ctx);
      })

      //////////////move SHIP
    };

    //  var keyGame = Asteroids.Game.bullets;
    //  key.setScope = Asteroids.Game;

    //
    Game.prototype.step = function () {
      this.move();
      this.draw();
      this.checkCollisions();
      this.checkEdges();
    };

    Game.FPS = 30;

    Game.prototype.start = function () {
      //this.ship = new Asteroids.Ship(Game.DIM_X/2, Game.DIM_Y/2);
      //this.ship = Asteroids.Ship.addShip(250,250);
      this.ship = new Asteroids.Ship(250,250);

      this.addAsteroids(5);

      var that = this;
      this.timer = window.setInterval(function() {
        that.step();
      }, 30); //Game.FPS

    };


    Game.prototype.fireBullets = function() {
      this.bullets.push(this.ship.fireBullet(this));
    };


    Game.prototype.stop = function() {
      clearInterval(this.timer);
    }

    Game.prototype.checkEdges = function () {
      this.asteroids.forEach(function(asteroid) {
          asteroid.x = (asteroid.x - asteroid.radius > 500) ? (0-asteroid.radius+1) : asteroid.x;
          asteroid.x = (asteroid.x + asteroid.radius < 0) ? (500+asteroid.radius-1) : asteroid.x;
          asteroid.y = (asteroid.y - asteroid.radius > 500) ? (0-asteroid.radius+1) : asteroid.y;
          asteroid.y = (asteroid.y + asteroid.radius < 0) ? (500+asteroid.radius-1) : asteroid.y;

        })
      }




      //
      // game.removeAsteroid(asteroid);
      // game.removeBullet(bullet);

      var arrayObjectIndexOf = function(myArray, searchTerm, property) {
          for(var i = 0, len = myArray.length; i < len; i++) {
              if (myArray[i][property] === searchTerm) return i;
          }
          return -1;
      }


      Game.prototype.removeAsteroid = function(asteroid) {
        var i = this.asteroids.indexOf(asteroid);
        this.asteroids.splice(i,1);

      };

      Game.prototype.removeBullet = function(bullet) {
        var i = this.bullets.indexOf(bullet);
        this.bullets.splice(i,1);

      };

      Game.prototype.checkCollisions = function() {

        var that = this;
        // var asteroids = this.asteroids;
        // this.bullets.forEach(function(bullet) {
        //   bullet.hitAsteroids(asteroids);
        // });

        var bullets = this.bullets;

        this.asteroids.forEach(function(asteroid) {
//          var asteroid_that = asteroid;
          bullets.forEach(function(bullet) {
            if (bullet.isCollidedWith(asteroid)) {
              that.removeBullet(bullet);
              that.removeAsteroid(asteroid);
            }
          });

          if(asteroid.isCollidedWith(that.ship)) {
            //console.log("asdfdsafa");
            that.ship.color = "black";
            //alert("You hit asteroid");
            //that.stop();
          }

        });

      };

    })(this);
