var x = 1;
console.log (x  + " is a " + typeof x);


var calcSigmaN = function(n){
  var r = ( (n + 1) * n ) / 2;
  return r;
}

var calcSigmaNBF = function(n)
{
  var result = 0;
  var i = 1;
  while(n >= i){
    result = result + i;
    i = i + 1;
  }
  return result;
}
 
var add = function(a, b){
    var r = a + b;
    return r;
}

var sub = function(a, b){
    var r = a - b;
    return r;
}

var greaterThan = function(a, b){
  if(a >= b){
    return a;
  }
  return b;
}


var greatestof3 = function(a, b, c){
  if(a >= b && a >= c){
    return a;
  }
  /*
  else{
    if(b >= a && b >= c){
      return b;
    }
  }
  */
  else if(b >= a && b >= c){
      return b;
  }
  return c;
}

var n = 100;
console.log(( (n + 1) * n ) / 2);
console.log(calcSigmaN(100));
console.log(calcSigmaN(10));
console.log(calcSigmaN(999));
