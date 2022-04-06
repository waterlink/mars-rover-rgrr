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
    maxColumn = 6;
    minColumn = 1;
    obstacles = [];

    constructor(point, direction) {
        this.point = point;
        this.direction = direction;
    }

    setObstacle(point) {
        this.obstacles.push(point);
    }

    async hasEncounteredObstacles(point) {
        for (const p of this.obstacles) {
            if (point.x === p.x && point.y === p.y) {
                return true;
            }
        }
        return false;
    }

    async acceptCommands(commands) {
        for (const command of commands) {
            const currentPoint = JSON.parse(JSON.stringify(this.point));
            if (command === "f") {
                if((currentPoint.x === this.minColumn || this.point.y === this.minColumn) && this.direction.key === "S"){
                    currentPoint.x = this.maxColumn;
                    currentPoint.y = this.maxColumn;
                }else{
                    currentPoint[this.direction.moveAxis] += this.direction.moveSign;
                }
            }
            if (command === "b") {
                currentPoint[this.direction.moveAxis] -= this.direction.moveSign;
            }
            if (command === "l") {
                this.direction = this.direction.left;
            }
            if (command === "r") {
                this.direction = this.direction.right;
            }
            if (await this.hasEncounteredObstacles(currentPoint)) {
                throw new Error(`Rover has encountered an obstacle at co-ordinate (${currentPoint.x},${currentPoint.y})`);
            } else {
                this.point = currentPoint;
            }
        }
    }
}

module.exports = {
    Point,
    Direction,
    Rover
};