// base "class" for dances
function Dance() {
	this.danceFigures = [];
}

Dance.prototype.whereShouldIBe = function(role, bar, beat) {

	if (beat === undefined)
		beat = bar * 4;

	// if the dancer isn't in a figure, then they don't go anywhere!
	if ((this.danceFigures[bar] === undefined) || (this.danceFigures[bar][role] === undefined))
		return {
			x : 0,
			y : 0
		};

	// find out which figure is being danced by the person
	var figure = this.danceFigures[bar][role].figure;

	var roleInTheFigure = this.danceFigures[bar][role].role;

	return figure.whereShouldIBe(roleInTheFigure, (bar % 8));

};

