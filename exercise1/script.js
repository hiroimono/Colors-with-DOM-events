var square = document.getElementById("square");
document.addEventListener("mousemove", function(e) {
  square.style.left = e.clientX - 50 + "px";
  square.style.top = e.clientY - 50 + "px";
});
