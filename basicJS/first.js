var x = 1;
console.log (x  + " is a " + typeof x);


var calcSigmaN = function(n){
  var r = ( (n + 1) * n ) / 2;
  return r;
}
  
var add = function(a, b){
    var r = a + b;
    return r;
}

var n = 100;
console.log(( (n + 1) * n ) / 2);
console.log(calcSigmaN(100));
console.log(calcSigmaN(10));
console.log(calcSigmaN(999));
