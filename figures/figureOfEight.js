var figureOfEight = new Figure();

// starts where he's standing
figureOfEight.firstManPosition[0] = {
	x : 0,
	y : 0
};
figureOfEight.firstManPosition[4] = {
	x : 1,
	y : 1
};
figureOfEight.firstManPosition[8] = {
	x : 4,
	y : 3
};
figureOfEight.firstManPosition[12] = {
	x : 5,
	y : 2
};
figureOfEight.firstManPosition[16] = {
	x : 4,
	y : 1
};
figureOfEight.firstManPosition[20] = {
	x : 3,
	y : 1
};
figureOfEight.firstManPosition[24] = {
	x : 0,
	y : 3
};
figureOfEight.firstManPosition[28] = {
	x : -1,
	y : 2
};

// finishes back in place
figureOfEight.firstManPosition[32] = {
	x : 0,
	y : 0
};



// starts where he's standing
figureOfEight.firstLadyPosition[0] = {
	x : 0,
	y : 0
};
figureOfEight.firstLadyPosition[4] = {
	x : -2,
	y : 2
};
figureOfEight.firstLadyPosition[8] = {
	x : -4,
	y : 3
};
figureOfEight.firstLadyPosition[12] = {
	x : -5,
	y : 2
};
figureOfEight.firstLadyPosition[16] = {
	x : -4,
	y : 1
};
figureOfEight.firstLadyPosition[20] = {
	x : -2,
	y : 2
};
figureOfEight.firstLadyPosition[24] = {
	x : 0,
	y : 3
};
figureOfEight.firstLadyPosition[28] = {
	x : 1,
	y : 2
};

// finishes back in place
figureOfEight.firstLadyPosition[32] = {
	x : 0,
	y : 0
};

figureOfEight.figure = [figureOfEight.firstManPosition, figureOfEight.firstLadyPosition];
