/*Optional use with first exercise
var square = document.getElementById("square");
document.addEventListener("mousemove", function(e) {
  square.style.left = e.clientX - 50 + "px";
  square.style.top = e.clientY - 50 + "px";
});*/

//Exercise 2
var square = document.getElementById("square");
document.addEventListener("mousedown", function() {
  return (square.style.backgroundColor = colorChanger());
});

document.addEventListener("mouseup", function() {
  return (square.style.backgroundColor = colorChanger());
});

function colorChanger() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + "," + g + "," + b + ")";
}
