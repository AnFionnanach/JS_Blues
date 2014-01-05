var basicDance = new Dance();

// dances need to specify which couple is dancing which figure
basicDance.figureOfEight = [
	{
		figure : figureOfEight,
		role : roles["firstMan"]
	},
	{
		figure : figureOfEight,
		role : roles["firstLady"]
	}
];

basicDance.leadDownAndUp = [
    {
        figure : leadDownAndUp,
        role : roles["firstMan"]
    },
    {
        figure : leadDownAndUp,
        role : roles["firstLady"]
    }
];

basicDance.rightsAndLefts = [
	{
		figure : rightsAndLefts,
		role : roles["firstMan"]
	},
	{
		figure : rightsAndLefts,
		role : roles["firstLady"]
	},
	{
		figure : rightsAndLefts,
		role : roles["secondMan"]
	},
	{
		figure : rightsAndLefts,
		role : roles["secondLady"]
	}
];

for (var i = 1; i < 9; i++) {
    basicDance.danceFigures[i] = basicDance.leadDownAndUp;
};

for (var i = 9; i < 17; i++) {
	basicDance.danceFigures[i] = basicDance.figureOfEight;
};

for (var i = 17; i < 25; i++) {
    basicDance.danceFigures[i] = basicDance.rightsAndLefts;
};
