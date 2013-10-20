function Figure() {

	this.firstManPosition = [];
	this.firstLadyPosition = [];
	this.secondManPosition = [];
	this.secondLadyPosition = [];
	this.thirdManPosition = [];
	this.thirdLadyPosition = [];
	this.fourthManPosition = [];
	this.fourthLadyPosition = [];
	this.figure = [];
}

Figure.prototype.follow = function(path, gap, beats) {
	var newPath = [];
	var pathLength = path.length;
	for (var i = 0; i < pathLength; i = i + beats) {
		newPath[i] = path[(i + (gap * beats)) % (pathLength - 1)];
	};
	return newPath;
};

Figure.prototype.mirrorVertically = function(path, beats) {
	var newPath = [];
	for (var i = 0; i < path.length; i = i + beats) {
		newPath[i] = {x: -path[i].x, y: path[i].y};
	};
	return newPath;
};

Figure.prototype.mirrorHorizontally = function(path, beats) {
	var newPath = [];
	for (var i = 0; i < path.length; i = i + beats) {
        newPath[i] = {x: path[i].x, y: -path[i].y};
	};
	return newPath;
};

Figure.prototype.parallel = function(path) {
	var newPath = path;
	return newPath;
};

Figure.prototype.oppositeDirection = function(path, beats) {
	var newPath = [];
	for (var i = 0; i < path.length; i++) {
        newPath[i] = {x: -path[i].x, y: path[i].y};
	};
	return newPath;
};

Figure.prototype.whereShouldIBe = function(role, bar, beat) {

	if (beat === undefined)
		beat = bar * 4;

	if (this.figure[role] === undefined)
		return {
			x : 0,
			y : 0
		};

	return this.figure[role][beat];
};
