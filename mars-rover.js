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
    topRightNode;

    constructor(point, direction, topRightNode) {
        this.point = point;
        this.direction = direction;
        this.topRightNode = topRightNode;
        this.NODE_SOUTH_WEST = new Point(1, 1);
    }

    acceptCommands(commands) {
        for (const command of commands) {
            const border = this.topRightNode[this.direction.moveAxis];
            if(["f", "b"].includes(command)) {
                const move = {
                    "f": 1 * this.direction.moveSign,
                    "b": -1 * this.direction.moveSign
                }
                const nextPosition = this.point[this.direction.moveAxis] + move[command];
                const isOutOfBorders = this.topRightNode && nextPosition > border;
                if(isOutOfBorders)   {
                    this.point = this.NODE_SOUTH_WEST;
                } else {
                    this.point[this.direction.moveAxis] = nextPosition;
                }
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