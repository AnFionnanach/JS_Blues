function player() {

    this.image = new Image();
    this.image.src = 'images/dancer_m1.png';

    this.x = 120;
    this.y = 90;
    this.toX = this.x;
    this.toY = this.y;

    this.speed = 5;
    this.path = [];
    this.pathIndex = -1;

    this.setPosition = function(x, y) {
        this.x = x;
        this.y = y;
    };

    this.draw = function() {
        try {
            context.drawImage(this.image, this.x, this.y);
            //ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
        } catch (e) {
            //sometimes, if character's image is too big and will not load until the drawing of the first frame, Javascript will throws error and stop executing everything. To avoid this we have to catch an error and retry painting in another frame. It is invisible for the user with 50 frames per second.
        }
    };

    this.moveTo = function(coords) {
        //this.setPosition(coords.pageX - c.offsetLeft, coords.pageY - c.offsetTop);
        this.toX = coords.pageX - danceFloor.offsetLeft;
        this.toY = coords.pageY - danceFloor.offsetTop;
    };

    this.move = function() {
        // check this there's a path
        if (this.pathIndex > -1) {
            // calculate the distance to the next point in the path array
            while ((this.pathIndex < this.path.length - 1) && (this.distance(this.path[this.pathIndex])) < this.speed) {
                this.pathIndex++;
            };
            this.moveTo(this.path[this.pathIndex]);
        };

        var deltaX = this.toX - this.x, deltaY = this.toY - this.y;
        var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        var fraction = distance / this.speed;
        //console.log("x = " + this.x + " y = " + this.y + " toX = " + toX + " toY = " + toY + " distance = " + distance);
        if (distance > this.speed) {
            this.setPosition(this.x + (deltaX / fraction), this.y + ~~(deltaY / fraction));
        };
    };

    this.distance = function(coords) {
        this.toX = coords.pageX - danceFloor.offsetLeft, this.toY = coords.pageY - danceFloor.offsetTop;
        var deltaX = this.toX - this.x, deltaY = this.toY - this.y;
        var distance = Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
        return distance;
    };

    this.mapPath = function(touches) {
        if (this.pathIndex == -1) {
            this.pathIndex = 0;
        };
        this.path.push(touches);
        //console.log("Path length = " + this.path.length);
    };

    this.mapMoves = function() {
        context.fillStyle = 'red';
        if (this.pathIndex > -1) {
            for (var i = this.pathIndex; i < this.path.length; i++) {
                context.fillRect(this.path[i].pageX - danceFloor.offsetLeft, this.path[i].pageY - danceFloor.offsetTop, 5, 5);
            };
        };
    };

    this.moveLeft = function() {
        if (this.x > 0) {
            //check whether the object is inside the screen
            this.setPosition(this.x - 5, this.y);
        }
    };

    this.moveRight = function() {
        if (this.x  < floorWidth) {
            //check whether the object is inside the screen
            this.setPosition(this.x + 5, this.y);
        }
    };
    this.moveUp = function() {
        if (this.y > 0) {
            //check whether the object is inside the screen
            this.setPosition(this.x, this.y - 5);
        }
    };

    this.moveDown = function() {
        if (this.y < floorHeight) {
            //check whether the object is inside the screen
            this.setPosition(this.x, this.y + 5);
        }
    };

};
