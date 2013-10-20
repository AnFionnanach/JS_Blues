var leadDownAndUp = new Figure();

// starts where he's standing
leadDownAndUp.firstManPosition[0] = {
	x : 0,
	y : 0
};
leadDownAndUp.firstManPosition[4] = {
	x : 1.5,
	y : 0
};
leadDownAndUp.firstManPosition[8] = {
	x : 1.5,
	y : 2
};
leadDownAndUp.firstManPosition[12] = {
	x : 1.5,
	y : 4
};
leadDownAndUp.firstManPosition[16] = {
	x : 1.5,
	y : 6
};
leadDownAndUp.firstManPosition[20] = {
	x : 1.5,
	y : 6
};
leadDownAndUp.firstManPosition[24] = {
	x : 1.5,
	y : 4
};
leadDownAndUp.firstManPosition[28] = {
	x : 1.5,
	y : 2
};

// finishes back in place
leadDownAndUp.firstManPosition[32] = {
	x : 0,
	y : 0
};

leadDownAndUp.firstLadyPosition = leadDownAndUp.mirrorVertically(leadDownAndUp.firstManPosition, 4);

leadDownAndUp.figure = [leadDownAndUp.firstManPosition, leadDownAndUp.firstLadyPosition];
