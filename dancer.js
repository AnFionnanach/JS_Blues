var gender = {
	male : 0,
	female : 1
};

var roles = {
	'firstMan' : 1,
	'firstLady' : 2,
	'secondMan' : 3,
	'secondLady' : 4,
	'thirdMan' : 5,
	'thirdLady' : 6,
	'fourthMan' : 7,
	'fourthLady' : 8
};

var relativePositions = {
	'firstMan' : {
		x : 4,
		y : 4
	},
	'firstLady' : {
		x : 8,
		y : 4
	},
	'secondMan' : {
		x : 4,
		y : 6
	},
	'secondLady' : {
		x : 8,
		y : 6
	},
	'thirdMan' : {
		x : 4,
		y : 8
	},
	'thirdLady' : {
		x : 8,
		y : 8
	},
	'fourthMan' : {
		x : 4,
		y : 10
	},
	'fourthLady' : {
		x : 8,
		y : 10
	}
};

var grid = {
	x : 10,
	y : 20
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
	this.currentPosition = {
		x : 0,
		y : 0
	};
	this.relativeDestination = {
		x : 0,
		y : 0
	};
	this.absoluteDestination = {
		x : 0,
		y : 0
	};
}

// dancers
var firstMan = new dancer();
firstMan.role = roles['firstMan'];
firstMan.gender = gender.male;
firstMan.image = dancerMan;
firstMan.startingPosition = relativePositions['firstMan'];

var firstLady = new dancer();
firstLady.role = roles['firstLady'];
firstLady.gender = gender.female;
firstLady.image = dancerLady;
firstLady.startingPosition = relativePositions['firstLady'];

var secondMan = new dancer();
secondMan.role = roles['secondMan'];
secondMan.gender = gender.male;
secondMan.image = dancerMan;
secondMan.startingPosition = relativePositions['secondMan'];

var secondLady = new dancer();
secondLady.role = roles['secondLady'];
secondLady.gender = gender.female;
secondLady.image = dancerLady;
secondLady.startingPosition = relativePositions['secondLady'];

var thirdMan = new dancer();
thirdMan.role = roles['thirdMan'];
thirdMan.gender = gender.male;
thirdMan.image = dancerMan;
thirdMan.startingPosition = relativePositions['thirdMan'];

var thirdLady = new dancer();
thirdLady.role = roles['thirdLady'];
thirdLady.gender = gender.female;
thirdLady.image = dancerLady;
thirdLady.startingPosition = relativePositions['thirdLady'];

var fourthMan = new dancer();
fourthMan.role = roles['fourthMan'];
fourthMan.gender = gender.male;
fourthMan.image = dancerMan;
fourthMan.startingPosition = relativePositions['fourthMan'];

var fourthLady = new dancer();
fourthLady.role = roles['fourthLady'];
fourthLady.gender = gender.female;
fourthLady.image = dancerLady;
fourthLady.startingPosition = relativePositions['fourthLady'];

var dancers = [firstMan, firstLady, secondMan, secondLady, thirdMan, thirdLady, fourthMan, fourthLady];
