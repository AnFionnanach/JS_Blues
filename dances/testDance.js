function whereShouldIBeDance(dance, role, bar, beat) {

    if (beat === undefined)
        beat = bar * 4;

    // if the dancer isn't in a figure, then they don't go anywhere!
    if ((dance[bar] === undefined) || (dance[bar][role] === undefined))
        return {
            x : 0,
            y : 0
        };

    // find out which figure is being danced by the person
    var figure = dance[bar][role].figure;

    var roleInTheFigure = dance[bar][role].role;

    return whereShouldIBe(figure, roleInTheFigure, ((bar-1) % 8) + 1);

}

downNup = [
    {
        figure : leadDownAndUp,
        role : roles["firstMan"]
    },
    {
        figure : leadDownAndUp,
        role : roles["firstLady"]
    }
];

allemande = [
    {
        figure : allemand,
        role : roles["firstMan"]
    },
    {
        figure : allemand,
        role : roles["firstLady"]
    },
    {
        figure : allemand,
        role : roles["secondMan"]
    },
    {
        figure : allemand,
        role : roles["secondLady"]
    }
];

eight = [
    {
        figure : figureOfEight,
        role : roles["firstMan"]
    },
    {
        figure : figureOfEight,
        role : roles["firstLady"]
    }
];


sixHands = [
    {
        figure : circle,
        role : roles["secondMan"]
    },
    {
        figure : circle,
        role : roles["secondLady"]
    },
    {
        figure : circle,
        role : roles["firstMan"]
    },
    {
        figure : circle,
        role : roles["firstLady"]
    },
    {
        figure : circle,
        role : roles["thirdMan"]
    },
    {
        figure : circle,
        role : roles["thirdLady"]
    }
];

dukeOfPerth = [];

for (var i = 1; i < 9; i++) {
    dukeOfPerth[i] = downNup;
};

for (var i = 9; i < 17; i++) {
    dukeOfPerth[i] = allemande;
};

for (var i = 17; i < 25; i++) {
    dukeOfPerth[i] = eight;
};

for (var i = 25; i < 33; i++) {
    dukeOfPerth[i] = sixHands;
};
