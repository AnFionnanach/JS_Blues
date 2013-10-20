var circle = new Figure();

circle.firstManPosition[0] = {x: 0, y: 0};
circle.firstManPosition[4] = {x: 2, y: -1};
circle.firstManPosition[8] = {x: 4, y: 0};
circle.firstManPosition[12] = {x: 5, y: 1};
circle.firstManPosition[16] = {x: 6, y: 2};
circle.firstManPosition[20] = {x: 5, y: 1};
circle.firstManPosition[24] = {x: 4, y: 0};
circle.firstManPosition[28] = {x: 2, y: -1};
circle.firstManPosition[32] = {x: 0, y: 0};

circle.secondManPosition = circle.follow(circle.firstManPosition, 1, 4);
circle.thirdManPosition = circle.follow(circle.firstManPosition, 2, 4);
circle.thirdLadyPosition = circle.follow(circle.firstManPosition, 3, 4);
circle.secondLadyPosition = circle.follow(circle.firstManPosition, 4, 4);
circle.firstLadyPosition = circle.follow(circle.firstManPosition, 5, 4);

circle.figure = [circle.firstManPosition, circle.firstLadyPosition, circle.secondManPosition, circle.secondLadyPosition, circle.thirdManPosition, circle.thirdLadyPosition];
