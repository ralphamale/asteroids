function sum() {
  var sum = 0;
  var args = Array.prototype.slice.call(arguments);

  args.forEach(function (i) { sum += i} )

  console.log(sum);
};

sum(1);
sum(1,2);
sum(1,2,3);

/////////

function Dog() {

};

Dog.prototype.barkAt = function(name1,name2) {
  console.log("WOOF" + name1 + "WOOF" + name2 + " I AM " + this);
};

function Cat() {

};

// Function.prototype.myBind = function() {
//   var args = Array.prototype.slice.call(arguments);
//   console.log("Args before slice: " + args);
//   var myObj = args[0];
//   args = args.slice(1);
//
//
//   console.log("myObj is: " + myObj);
//   console.log("Args: " + args);
//   var f = this;
//
//   return function () {
//     f.apply(myObj,args);
//   };
//
// };
//
// doggy = new Dog();
// catty = new Cat();
// doggy.barkAt.myBind(catty,"Roma","Ralphy")();


//////////////


function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(numberToAdd) {
    //takes single number, appends to numbers each time.
    numbers = numbers.concat(numberToAdd);
    console.log("numbers: " + numbers);
    if (numbers.length == numArgs) {
      sum = 0;
      numbers.forEach(function(i) {sum += i});

      return sum;
    } else {
      return _curriedSum;
    }
  }

  return _curriedSum;
  // return _curriedSum(numArgs,numbers);

}

Function.prototype.curry = function(numArgs) {
  var args = [];

  var that = this;
  function _curry(argToAdd) {
    args.push(argToAdd);

    if (args.length == numArgs) {
      console.log("Got to here");
      console.log(args);
      console.log(that);
      var dummy = new Object();
      return that.apply(dummy,args);
    } else {
      return _curry;
    }

  };


  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
};

sumThree.curry(3)(4)(20)(3);