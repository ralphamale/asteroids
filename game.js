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
    var img = new Image();   // Create new img element

    var that = this;
    img.addEventListener("load", function() {
      that.ctx.drawImage(img, 200, 200);
    }, false);
    img.src = 'images.jpg'; // Set source path

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

      var img = new Image();   // Create new img element
      var that = this;
      img.addEventListener("load", function() {
          that.ctx.drawImage(img, 200, 200);
      }, false);
      img.src = 'images.jpg'; // Set source path


      this.ship = new Asteroids.Ship(250,250);

      this.addAsteroids(5);


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

      var that = this;
      this.bullets.forEach(function(bullet) {
        if ((bullet.x + bullet.radius < 0) || (bullet.x - bullet.radius > 500) ||
          (bullet.y - bullet.radius > 500) || (bullet.y + bullet.radius < 0)) {
            that.removeBullet(bullet);

          }
      });
      this.asteroids.forEach(function(asteroid) {
          asteroid.x = (asteroid.x - asteroid.radius > 500) ? (0-asteroid.radius+1) : asteroid.x;
          asteroid.x = (asteroid.x + asteroid.radius < 0) ? (500+asteroid.radius-1) : asteroid.x;
          asteroid.y = (asteroid.y - asteroid.radius > 500) ? (0-asteroid.radius+1) : asteroid.y;
          asteroid.y = (asteroid.y + asteroid.radius < 0) ? (500+asteroid.radius-1) : asteroid.y;

        })
      }

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

      Game.prototype.addPulse = function() {
        this.ship.dx += .5;
        this.ship.dy += .5;

      }

      Game.prototype.changeShipDir = function(dir) {
        var x = this.ship.dx;
        var y = this.ship.dy;


        // var angle = Math.acos( x / Math.sqrt(Math.sqrt(Math.pow(x,2) + Math.pow(y,2)) ));
        // var currentSpeed = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));

        if (dir == "left") {
          this.ship.x -= this.ship.dx;

          //Asteroids.Bullet.changeShipDir(-5,0);
        } else if (dir == "right") {
          this.ship.x += this.ship.dx;

          //Asteroids.Bullet.changeShipDir(5,0);
        } else if (dir == "up") {
          this.ship.y -= this.ship.dy;

        } else if (dir == "down"){
          this.ship.y += this.ship.dy;
        }

        // this.ship.dx = currentSpeed * Math.cos(angle);
        // this.ship.dy = currentSpeed * Math.sin(angle);

        // else if (dir == "up") {
//           Asteroids.Bullet.changeShipDir(0,-5);
//         } else if (dir == "down") {
//           Asteroids.Bullet.changeShipDir(0,5);
//         }

      }

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
            alert("You hit asteroid");
            that.stop();
      //      that.start();
          }

        });

      };

    })(this);
