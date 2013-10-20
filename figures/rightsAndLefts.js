rightsAndLefts = new Figure();

// starts where he's standing
rightsAndLefts.firstManPosition[0] = {
	x : 0,
	y : 0
};
rightsAndLefts.firstManPosition[4] = {
	x : 2,
	y : -1
};
rightsAndLefts.firstManPosition[8] = {
	x : 4,
	y : 0
};
rightsAndLefts.firstManPosition[12] = {
	x : 3,
	y : 1
};
rightsAndLefts.firstManPosition[16] = {
	x : 4,
	y : 2
};
rightsAndLefts.firstManPosition[20] = {
	x : 2,
	y : 3
};
rightsAndLefts.firstManPosition[24] = {
	x : 0,
	y : 2
};
rightsAndLefts.firstManPosition[28] = {
	x : 1,
	y : 1
};

// finishes back in place
rightsAndLefts.firstManPosition[32] = {
	x : 0,
	y : 0
};

// starts where he's standing
rightsAndLefts.firstLadyPosition[0] = {
	x : 0,
	y : 0
};

rightsAndLefts.firstLadyPosition[4] = {
	x : -2,
	y : 1
};
rightsAndLefts.firstLadyPosition[8] = {
	x : -4,
	y : 0
};
rightsAndLefts.firstLadyPosition[12] = {
	x : -5,
	y : 1
};
rightsAndLefts.firstLadyPosition[16] = {
	x : -4,
	y : 2
};
rightsAndLefts.firstLadyPosition[20] = {
	x : -2,
	y : 1
};
rightsAndLefts.firstLadyPosition[24] = {
	x : 0,
	y : 2
};
rightsAndLefts.firstLadyPosition[28] = {
	x : 1,
	y : 1
};

// finishes back in place
rightsAndLefts.firstLadyPosition[32] = {
	x : 0,
	y : 0
};

var secondManPosition = new Array;
rightsAndLefts.secondManPosition[0] = {
	x : 0,
	y : 0
};
rightsAndLefts.secondManPosition[4] = {
	x : 2,
	y : -1
};
rightsAndLefts.secondManPosition[8] = {
	x : 4,
	y : 0
};
rightsAndLefts.secondManPosition[12] = {
	x : 5,
	y : -1
};
rightsAndLefts.secondManPosition[16] = {
	x : 4,
	y : -2
};
rightsAndLefts.secondManPosition[20] = {
	x : 2,
	y : -1
};
rightsAndLefts.secondManPosition[24] = {
	x : 0,
	y : -2
};
rightsAndLefts.secondManPosition[28] = {
	x : -1,
	y : -1
};

// finishes back in place
rightsAndLefts.secondManPosition[32] = {
	x : 0,
	y : 0
};


// starts where he's standing
rightsAndLefts.secondLadyPosition[0] = {
	x : 0,
	y : 0
};

rightsAndLefts.secondLadyPosition[4] = {
	x : -2,
	y : 1
};
rightsAndLefts.secondLadyPosition[8] = {
	x : -4,
	y : 0
};
rightsAndLefts.secondLadyPosition[12] = {
	x : -3,
	y : -1
};
rightsAndLefts.secondLadyPosition[16] = {
	x : -4,
	y : -2
};
rightsAndLefts.secondLadyPosition[20] = {
	x : -2,
	y : -3
};
rightsAndLefts.secondLadyPosition[24] = {
	x : 0,
	y : -2
};
rightsAndLefts.secondLadyPosition[28] = {
	x : -1,
	y : -1
};

// finishes back in place
rightsAndLefts.secondLadyPosition[32] = {
	x : 0,
	y : 0
};

rightsAndLefts.figure = [rightsAndLefts.firstManPosition, rightsAndLefts.firstLadyPosition, rightsAndLefts.secondManPosition, rightsAndLefts.secondLadyPosition];

