function curriedSum(numArgs) {
  var numbers = [];

  function _curriedSum(numberToAdd) {
    //takes single number, appends to numbers each time.
    numbers.concat(numberToAdd);
    if (numbers.length == numArgs) {
      sum = 0;
      numbers.forEach(function(i) {sum += i});

      return sum;
    } else {
      return this;
    }
  }

  return _curriedSum;
  // return _curriedSum(numArgs,numbers);

}
