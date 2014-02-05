function Surrogate() {

};



//Subclass.prototype = new Surrogate();

function Boob(size) {
  this.size = size;
};


Object.prototype.inherits = function(SuperClass) {
  function Surrogate() {

  };

  console.log(this);
  console.log(SuperClass);
  Surrogate.prototype = SuperClass.prototype;
  this.prototype = new Surrogate();

  SuperClass.call(this)
}

// function Nipple(size) {
//   Boob.call(this, size);
// };
//

args[0]


Function Animal(name) {
  this.name = name;
}

Function Surrogate() {

}

Surrogate.prototype = Animal.prototype;

Function Dog(name) {

  this.name = name;

  Animal.call(this,name);
}

Dog.prototype = new Surrogate();
