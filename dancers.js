var gender = {
	male : 0,
	female : 1
};

var roles = {
	'firstMan' : 0,
	'firstLady' : 1,
	'secondMan' : 2,
	'secondLady' : 3,
	'thirdMan' : 4,
	'thirdLady' : 5,
	'fourthMan' : 6,
	'fourthLady' : 7
};

var relativePositions = {
	'firstMan' : {
		x : 4,
		y : 2
	},
	'firstLady' : {
		x : 8,
		y : 2
	},
	'secondMan' : {
		x : 4,
		y : 4
	},
	'secondLady' : {
		x : 8,
		y : 4
	},
	'thirdMan' : {
		x : 4,
		y : 6
	},
	'thirdLady' : {
		x : 8,
		y : 6
	},
	'fourthMan' : {
		x : 4,
		y : 8
	},
	'fourthLady' : {
		x : 8,
		y : 8
	}
};

var grid = {
	x : 10,
	y : 10
};

function fullName(given, nick, family) {

	this.givenName = given;
	this.nickName = nick;
	this.familyName = family;

	return this.givenName + " \"" + this.nickName + "\" " + this.familyName;
}

function dancer() {
	this.name = new fullName();
	this.gender;
	this.currentRole;
	this.image;
	this.startingPosition = {
		x : 0,
		y : 0
	};
	this.pixelPosition = {
		x : 0,
		y : 0
	};
	this.relativeDestination = {
		x : 0,
		y : 0
	};
	this.pixelDestination = {
		x : 0,
		y : 0
	};
}

// dancers
var firstMan = new dancer();
firstMan.role = roles['firstMan'];
firstMan.gender = gender.male;
firstMan.image = dancer_m1;
console.log("dancer m1 - imagesLoaded: " + imagesLoaded);
firstMan.startingPosition = firstMan.currentPosition = relativePositions['firstMan'];

var firstLady = new dancer();
firstLady.role = roles['firstLady'];
firstLady.gender = gender.female;
firstLady.image = dancer_l1;
firstLady.startingPosition = firstLady.currentPosition = relativePositions['firstLady'];

var secondMan = new dancer();
secondMan.role = roles['secondMan'];
secondMan.gender = gender.male;
secondMan.image = dancer_m2;
secondMan.startingPosition = secondMan.currentPosition = relativePositions['secondMan'];

var secondLady = new dancer();
secondLady.role = roles['secondLady'];
secondLady.gender = gender.female;
secondLady.image = dancer_l2;
secondLady.startingPosition = secondLady.currentPosition = relativePositions['secondLady'];

var thirdMan = new dancer();
thirdMan.role = roles['thirdMan'];
thirdMan.gender = gender.male;
thirdMan.image = dancer_m3;
thirdMan.startingPosition = thirdMan.currentPosition = relativePositions['thirdMan'];

var thirdLady = new dancer();
thirdLady.role = roles['thirdLady'];
thirdLady.gender = gender.female;
thirdLady.image = dancer_l3;
thirdLady.startingPosition = thirdLady.currentPosition = relativePositions['thirdLady'];

var fourthMan = new dancer();
fourthMan.role = roles['fourthMan'];
fourthMan.gender = gender.male;
fourthMan.image = dancer_m4;
fourthMan.startingPosition = fourthMan.currentPosition = relativePositions['fourthMan'];

var fourthLady = new dancer();
fourthLady.role = roles['fourthLady'];
fourthLady.gender = gender.female;
fourthLady.image = dancer_l4;
fourthLady.startingPosition = fourthLady.currentPosition = relativePositions['fourthLady'];

var dancers = [firstMan, firstLady, secondMan, secondLady, thirdMan, thirdLady, fourthMan, fourthLady];
