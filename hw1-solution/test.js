var easingsList = [
"swing",
"easeInQuad",
"easeOutQuad",
"easeInOutQuad",
"easeInCubic",
"easeOutCubic",
"easeInOutCubic",
"easeInQuart",
"easeOutQuart",
"easeInOutQuart",
"easeInQuint",
"easeOutQuint",
"easeInOutQuint",
"easeInSine",
"easeOutSine",
"easeInOutSine",
"easeInExpo",
"easeOutExpo",
"easeInOutExpo",
"easeInCirc",
"easeOutCirc",
"easeInOutCirc",
"easeInElastic",
"easeOutElastic",
"easeInOutElastic",
"easeInBack",
"easeOutBack",
"easeInOutBack",
"easeInBounce",
"easeOutBounce"
];

var moveRight = function(){
  var d = parseInt($("#delay").val());

  var n = 0;
  var e = easingsList[n];
  moveBoxRight(n, e, d);

  var n = 1;
  var e = easingsList[n];
  moveBoxRight(n, e, d);



}

var moveLeft = function(){
}

var hideBoxes = function(){
  $(".button").fadeOut();
}

var showBoxes = function(){
  $(".button").fadeIn();
}

var moveBoxRight= function(n, easing, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left":pageWidth-boxWidth + "px"}, duration, easing); 
}

var moveBoxLeft= function(n, easing, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left" : "0px"}, duration, easing); 
}
