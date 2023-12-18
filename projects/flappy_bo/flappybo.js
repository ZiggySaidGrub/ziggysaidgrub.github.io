var boboEl = document.getElementById("bo");
var speedY = 0.1;
var maxDown = 20;
var maxUp = -20;
var y = 800;
//gravity loop
var gravity = function() {
	if(speedY < maxDown) {
		speedY = speedY + 0.5;
	}
	if(y < 10){
		y = 800;
	}
	if(y > 850){
		y = 20;
	}
	y = y - speedY;
	boboEl.style.bottom = y;
}
setInterval(gravity, 10);

// look for spacebar press
document.body.onkeydown = function(e) {
  if( e.keyCode == 32 ) {
    console.log("bobokey");
	if(speedY > maxUp) {
		speedY -= 30;
	}
  }
}
document.body.addEventListener("click", function() {
	if(speedY > maxUp) {
		speedY -= 30;
	}
});
