function figureOfEight() {
	
	var numberOfBars = 8;
	var numberOfBeats = numberOfBars * 4;
	
	var firstManPosition = new Array;
	// starts where he's standing
	firstManPosition[0] = {x: 0, y: 0};
	firstManPosition[4] = {x: 2, y: 2};
	firstManPosition[8] = {x: 4, y: 3};
	firstManPosition[12] = {x: 6, y: 2};
	firstManPosition[16] = {x: 4, y: 1};
	firstManPosition[20] = {x: 2, y: 3};
	firstManPosition[24] = {x: 0, y: 2};
	firstManPosition[28] = {x: -2, y: 1};
	
	// finishes back in place
	firstManPosition[32] = {x: 0, y: 0};
	
	var firstLadyPosition = new Array;
	// starts where he's standing
	firstLadyPosition[0] = {x: 0, y: 0};
	firstLadyPosition[4] = {x: -2, y: 2};
	firstLadyPosition[8] = {x: -4, y: 3};
	firstLadyPosition[12] = {x: -6, y: 2};
	firstLadyPosition[16] = {x: -4, y: 1};
	firstLadyPosition[20] = {x: -2, y: 3};
	firstLadyPosition[24] = {x: 0, y: 2};
	firstLadyPosition[28] = {x: 2, y: 1};
	
	// finishes back in place
	firstLadyPosition[32] = {x: 0, y: 0};
	
	this.figure = {
		firstMan: firstManPosition,
		firstLady: firstLadyPosition
	};
	
}

figureOfEight.prototype.whereShouldIBe = function (role, bar, beat) {
		
		if (beat === undefined)
			beat = bar * 4;
			
		return this.figure[role][beat];
	};