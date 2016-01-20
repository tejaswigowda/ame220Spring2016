var boxStatus = [
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left",
  "left"
];


var buttonClicked = function(n, easing)
{
  var id = "#button" + n.toString();
  var pageWidth = $("body").width();
  var boxWidth = 150;
  if(boxStatus[n] == "left"){
    $(id).animate({"margin-left" : pageWidth - boxWidth + "px", "color": "red"}, 1000, easing); 
    boxStatus[n] = "right";
  }
  else{
    $(id).animate({"margin-left" : "0px", "color" : "black"}, 1000, easing); 
    boxStatus[n] = "left";
  }
}
