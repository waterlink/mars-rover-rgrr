class Point {
    x;
    y;

    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

const Direction = {
    North: { key: "N", moveAxis: "y", moveSign: 1 },
    South: { key: "S", moveAxis: "y", moveSign: -1 },
    East: { key: "E", moveAxis: "x", moveSign: 1 },
    West: { key: "W", moveAxis: "x", moveSign: -1  }
};

Direction.North.left = Direction.West;
Direction.North.right = Direction.East;

Direction.South.left = Direction.East;
Direction.South.right = Direction.West;

Direction.East.left = Direction.North;
Direction.East.right = Direction.South;

Direction.West.left = Direction.South;
Direction.West.right = Direction.North;

class Rover {
    point;
    direction;
    mapSize;
    bottomLeftPoint;

    constructor(point, direction, mapSize, bottomLeftPoint) {
        this.point = point;
        this.direction = direction;
        this.mapSize = mapSize;
        this.bottomLeftPoint = bottomLeftPoint;
    }

    acceptCommands(commands) {
        for (const command of commands) {
            if (command === "f") {
                if (this.point[this.direction.moveAxis] + this.direction.moveSign > this.mapSize) {
                    this.point['x'] = this.bottomLeftPoint.x;
                    this.point['y'] = this.bottomLeftPoint.y;
                } else if (this.bottomLeftPoint && this.point[this.direction.moveAxis] + this.direction.moveSign <= this.bottomLeftPoint.x) {
                    this.point['x'] = this.bottomLeftPoint.x + this.mapSize - 1;
                    this.point['y'] = this.bottomLeftPoint.y + this.mapSize - 1;
                } else {
                    this.point[this.direction.moveAxis] += this.direction.moveSign;
                }
            }
            if (command === "b") {
                this.point[this.direction.moveAxis] -= this.direction.moveSign;
            }
            if (command === "l") {
                this.direction = this.direction.left;
            }
            if (command === "r") {
                this.direction = this.direction.right;
            }
        }
    }
}

module.exports = {
    Point,
    Direction,
    Rover
};