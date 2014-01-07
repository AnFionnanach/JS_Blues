var circle = [];
circle[1] = [];
circle[1][0] = {x: 210, y: 60};
circle[1][1] = {x: 300, y: 170};
circle[1][2] = {x: 120, y: 170};
circle[1][3] = {x: 300, y: 330};
circle[1][4] = {x: 120, y: 330};
circle[1][5] = {x: 210, y: 440};
circle[1][6] = {x: 120, y: 570};
circle[1][7] = {x: 300, y: 570};
circle[2] = [];
circle[2][0] = {x: 300, y: 170};
circle[2][1] = {x: 300, y: 330};
circle[2][2] = {x: 210, y: 60};
circle[2][3] = {x: 210, y: 440};
circle[2][4] = {x: 120, y: 170};
circle[2][5] = {x: 120, y: 330};
circle[2][6] = {x: 120, y: 570};
circle[2][7] = {x: 300, y: 570};
circle[3] = [];
circle[3][0] = {x: 300, y: 330};
circle[3][1] = {x: 210, y: 440};
circle[3][2] = {x: 300, y: 170};
circle[3][3] = {x: 120, y: 330};
circle[3][4] = {x: 210, y: 60};
circle[3][5] = {x: 120, y: 170};
circle[3][6] = {x: 120, y: 570};
circle[3][7] = {x: 300, y: 570};
circle[4] = [];
circle[4][0] = {x: 210, y: 440};
circle[4][1] = {x: 120, y: 330};
circle[4][2] = {x: 300, y: 330};
circle[4][3] = {x: 120, y: 170};
circle[4][4] = {x: 300, y: 170};
circle[4][5] = {x: 210, y: 60};
circle[4][6] = {x: 120, y: 570};
circle[4][7] = {x: 300, y: 570};
circle[5] = [];
circle[5][0] = {x: 300, y: 330};
circle[5][1] = {x: 210, y: 440};
circle[5][2] = {x: 300, y: 170};
circle[5][3] = {x: 120, y: 330};
circle[5][4] = {x: 210, y: 60};
circle[5][5] = {x: 120, y: 170};
circle[5][6] = {x: 120, y: 570};
circle[5][7] = {x: 300, y: 570};
circle[6] = [];
circle[6][0] = {x: 300, y: 170};
circle[6][1] = {x: 300, y: 330};
circle[6][2] = {x: 210, y: 60};
circle[6][3] = {x: 210, y: 440};
circle[6][4] = {x: 120, y: 170};
circle[6][5] = {x: 120, y: 330};
circle[6][6] = {x: 120, y: 570};
circle[6][7] = {x: 300, y: 570};
circle[7] = [];
circle[7][0] = {x: 210, y: 60};
circle[7][1] = {x: 300, y: 170};
circle[7][2] = {x: 120, y: 170};
circle[7][3] = {x: 300, y: 330};
circle[7][4] = {x: 120, y: 330};
circle[7][5] = {x: 210, y: 440};
circle[7][6] = {x: 120, y: 570};
circle[7][7] = {x: 300, y: 570};
circle[8] = [];
circle[8][0] = {x: 120, y: 90};
circle[8][1] = {x: 300, y: 90};
circle[8][2] = {x: 120, y: 250};
circle[8][3] = {x: 300, y: 250};
circle[8][4] = {x: 120, y: 410};
circle[8][5] = {x: 300, y: 410};
circle[8][6] = {x: 120, y: 570};
circle[8][7] = {x: 300, y: 570};


function whereShouldIBe(figure, role, bar, beat) {

    if (beat === undefined)
        beat = bar * 4;

    if (figure[bar][role] === undefined)
        return {
            x : 0,
            y : 0
        };

    return figure[bar][role];
};
