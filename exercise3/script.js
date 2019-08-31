var outerSquare = document.getElementById("outerSquare");
var innerSquare = document.getElementById("innerSquare");

var fnOuterColor = function() {
  outerSquare.style.backgroundColor = colorChanger();
};

var fnInnerColor = function() {
  innerSquare.style.backgroundColor = colorChanger();
  outerSquare.removeEventListener("click", fnOuterColor);
  innerSquare.addEventListener("mouseleave", function() {
    outerSquare.addEventListener("click", fnOuterColor);
  });
};

outerSquare.addEventListener("click", fnOuterColor);
innerSquare.addEventListener("click", fnInnerColor);

function colorChanger() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
