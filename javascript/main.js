var zigEl = document.getElementById("zig");
var welcomeEl = document.getElementById("welcome");

//color change function

var color_change = function() {
	var r = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	welcomeEl.style.color = "rgb(" + r + "," + g + "," + b + ")";
}
zigEl.addEventListener("click", color_change);