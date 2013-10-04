// images
var imageManLoaded = false;
var imageLadyLoaded = false;
var dancerMan = new Image();
dancerMan.onload = function() {
	//context.drawImage(dancer, 69, 50);
	imageManLoaded = true;
};
dancerMan.src = "images/dancer.png";
var dancerLady = new Image();
dancerLady.onload = function() {
	//context.drawImage(dancer, 69, 50);
	imageLadyLoaded = true;
};
dancerLady.src = "images/lady_dancer.png";

