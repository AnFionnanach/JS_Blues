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

var imagesLoaded = false;

var dancer_images = ["images/dancer_m1.png", "images/dancer_m2.png", "images/dancer_m3.png", "images/dancer_m4.png", "images/dancer_l1.png", "images/dancer_l2.png", "images/dancer_l3.png", "images/dancer_l4.png"];

var dancer_m1, dancer_m2, dancer_m3, dancer_m4, dancer_l1, dancer_l2, dancer_l3, dancer_l4;

var imageCallBack = function (images, numberLoaded) {
		dancer_m1 = images[0];
		dancer_m2 = images[1];
		dancer_m3 = images[2];
		dancer_m4 = images[3];
		dancer_l1 = images[4];
		dancer_l2 = images[5];
		dancer_l3 = images[6];
		dancer_l4 = images[7];
		
		imagesLoaded = true;
		console.log("Images loaded!");
};

var loadImages = new ImagePreloader(dancer_images, imageCallBack);

// wait for the images to load
var waitForTheImages = function() {
	if (imagesLoaded === false) {
		console.log("Not loaded yet!");
		setTimeout("waitForTheImages()", 1000);
	};
};

waitForTheImages();
