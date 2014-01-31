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

var dancer_images = ["images/transparent.png", "images/dancer_m2.png", "images/dancer_m3.png", "images/dancer_m4.png", "images/dancer_l1.png", "images/dancer_l2.png", "images/dancer_l3.png", "images/dancer_l4.png"];

var dancer_m1, dancer_m2, dancer_m3, dancer_m4, dancer_l1, dancer_l2, dancer_l3, dancer_l4;

var imageCallBack = function (images, numberLoaded) {
		firstMan.image = dancer_m1 = images[0];
		secondMan.image = dancer_m2 = images[1];
		thirdMan.image = dancer_m3 = images[2];
		fourthMan.image = dancer_m4 = images[3];
		firstLady.image = dancer_l1 = images[4];
		secondLady.image = dancer_l2 = images[5];
		thirdLady.image = dancer_l3 = images[6];
		fourthLady.image = dancer_l4 = images[7];
		
		imagesLoaded = true;
		console.log("Images loaded!");
};

var loadImages = new ImagePreloader(dancer_images, imageCallBack);

