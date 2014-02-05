Function.prototype.inherits = function (BaseClass) {
  //we use Object.prototype.
  function Surrogate () {};
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
    //SuperClass.call(this)
};

(function (root) {
  var Asteroids = root.Asteroids = (root.Asteroids || {});





  var MovingObject = Asteroids.MovingObject = function(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.dx;
    this.dy;
  };

  MovingObject.prototype.move = function() {
    this.x += this.dx;
    this.y += this.dy;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();

    ctx.arc(
      this.x,
      this.y,
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var sumRadius = this.radius + otherObject.radius;

    //distance formula
    var distance = Math.sqrt((Math.pow((this.x-otherObject.x), 2) + Math.pow((this.y-otherObject.y), 2)));

    return sumRadius > distance;
  };

})(this);