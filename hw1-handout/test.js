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
"easeInSine ",
"easeOutSine",
"easeInOutSine",
"easeInExpo",
"easeOutExpo",
"easeInOutExpo",
"easeInCirc",
"easeOutCirc",
"easeInOutCirc",
"easeInElasic",
"easeOutElastic",
"easeInOutElatic",
"easeInBack",
"easeOutBack",
"easeInOutBack",
"easeInBounce",
"easeOutBounce"
];

var moveRight = function(){
}

var moveLeft = function(){
}

var moveBoxRight= function(n, easing, endcolor, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  $(id).animate({"margin-left":pageWidth-boxWidth + "px", "color":endcolor}, duration, easing); 
}
var moveBoxLeft= function(n, easing, endcolor, duration)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  if(boxStatus[n] == "left"){
    $(id).animate({"margin-left" : pageWidth - boxWidth + "px", "color": endcolor}, duration, easing); 
  }
  else{
    $(id).animate({"margin-left" : "0px", "color" : endColor}, duraion, easing); 
  }
}
