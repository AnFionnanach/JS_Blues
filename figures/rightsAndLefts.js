function rightsAndLefts() {

	var numberOfBars = 8;
	var numberOfBeats = numberOfBars * 4;

	var firstManPosition = new Array;
	// starts where he's standing
	firstManPosition[0] = {
		x : 0,
		y : 0
	};
	firstManPosition[4] = {
		x : 2,
		y : -1
	};
	firstManPosition[8] = {
		x : 4,
		y : 0
	};
	firstManPosition[12] = {
		x : 3,
		y : 1
	};
	firstManPosition[16] = {
		x : 4,
		y : 2
	};
	firstManPosition[20] = {
		x : 2,
		y : 3
	};
	firstManPosition[24] = {
		x : 0,
		y : 2
	};
	firstManPosition[28] = {
		x : 1,
		y : 1
	};

	// finishes back in place
	firstManPosition[32] = {
		x : 0,
		y : 0
	};

	var firstLadyPosition = new Array;
	// starts where he's standing
	firstLadyPosition[0] = {
		x : 0,
		y : 0
	};
	
	firstLadyPosition[4] = {
		x : -2,
		y : 1
	};
	firstLadyPosition[8] = {
		x : -4,
		y : 0
	};
	firstLadyPosition[12] = {
		x : -5,
		y : 1
	};
	firstLadyPosition[16] = {
		x : -4,
		y : 2
	};
	firstLadyPosition[20] = {
		x : -2,
		y : 1
	};
	firstLadyPosition[24] = {
		x : 0,
		y : 2
	};
	firstLadyPosition[28] = {
		x : 1,
		y : 1
	};

	// finishes back in place
	firstLadyPosition[32] = {
		x : 0,
		y : 0
	};

	var secondManPosition = new Array;
	// starts where he's standing
	secondManPosition[0] = {
		x : 0,
		y : 0
	};
	secondManPosition[4] = {
		x : 2,
		y : -1
	};
	secondManPosition[8] = {
		x : 4,
		y : 0
	};
	secondManPosition[12] = {
		x : 5,
		y : -1
	};
	secondManPosition[16] = {
		x : 4,
		y : -2
	};
	secondManPosition[20] = {
		x : 2,
		y : -1
	};
	secondManPosition[24] = {
		x : 0,
		y : -2
	};
	secondManPosition[28] = {
		x : -1,
		y : -1
	};

	// finishes back in place
	secondManPosition[32] = {
		x : 0,
		y : 0
	};

	var secondLadyPosition = new Array;
	// starts where he's standing
	secondLadyPosition[0] = {
		x : 0,
		y : 0
	};
	
	secondLadyPosition[4] = {
		x : -2,
		y : 1
	};
	secondLadyPosition[8] = {
		x : -4,
		y : 0
	};
	secondLadyPosition[12] = {
		x : -3,
		y : -1
	};
	secondLadyPosition[16] = {
		x : -4,
		y : -2
	};
	secondLadyPosition[20] = {
		x : -2,
		y : -3
	};
	secondLadyPosition[24] = {
		x : 0,
		y : -2
	};
	secondLadyPosition[28] = {
		x : -1,
		y : -1
	};

	// finishes back in place
	secondLadyPosition[32] = {
		x : 0,
		y : 0
	};
	this.figure = [
		firstManPosition,
		firstLadyPosition,
		secondManPosition,
		secondLadyPosition
	];

}

rightsAndLefts.prototype.whereShouldIBe = function(role, bar, beat) {

	if (beat === undefined)
		beat = bar * 4;

	if (this.figure[role] === undefined)
		return {
			x : 0,
			y : 0
		};

	return this.figure[role][beat];
}; 