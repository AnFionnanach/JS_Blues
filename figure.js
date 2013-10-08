function figure() {

	var numberOfBars = 8;
	var numberOfBeats = numberOfBars * 4;

	this.firstMan;
	this.firstLady;
	this.secondMan;
	this.secondLady;
	this.thirdMan;
	this.thirdLady;
	this.fourthMan;
	this.fourthLady;
	this.figure;
}

figure.prototype.follow = function(path, gap) {
	var newPath;
	var pathLength = path.length;
	for (var i = 0; i < pathLength; i++) {
		newPath = path[(i + gap) % pathLength];
	};
	return newPath;
};

figure.prototype.mirrorVertically = function(path) {
	var newPath;
	for (var i = 0; i < path.length; i++) {
		newPath[i].x = -path[i].x;
		newPath[i].y = path[i].y;
	};
	return newPath;
};

figure.prototype.mirrorHorizontally = function(path) {
	var newPath;
	for (var i = 0; i < path.length; i++) {
		newPath[i].x = path[i].x;
		newPath[i].y = -path[i].y;
	};
	return newPath;
};

figure.prototype.parallel = function(path) {
	var newPath = path;
	return newPath;
};

figure.prototype.oppositeDirection = function(path) {
	var newPath;
	for (var i = 0; i < path.length; i++) {
		newPath[i].x = -path[i].x;
		newPath[i].y = -path[i].y;
	};
	return newPath;
};

figure.prototype.whereShouldIBe = function(role, bar, beat) {

	if (beat === undefined)
		beat = bar * 4;

	if (this.figure[role] === undefined)
		return {
			x : 0,
			y : 0
		};

	return this.figure[role][beat];
};
