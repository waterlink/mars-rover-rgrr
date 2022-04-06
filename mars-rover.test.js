const {Point, Direction, Rover} = require("./mars-rover");

describe("Rover", () => {
    let rover;

    it("You are given the initial starting point (x,y) " +
      "of a rover and the direction (N,S,E,W) it is facing.", () => {
        const point = new Point(1, 2);
        const direction = Direction.East;

        const rover = new Rover(point, direction);

        expect(rover.point).toEqual(point);
        expect(rover.direction).toEqual(direction);
    });

    it("The rover receives a character array of commands.", () => {
        const point = new Point(2, -1);
        const direction = Direction.South;
        const rover = new Rover(point, direction);

        expect(() => rover.acceptCommands([
            "f",
            "b",
            "l",
            "r"
        ])).not.toThrow();
    });

    describe("Implement commands that move the rover forward/backward (f,b).", () => {
        describe("when rover is pointing north", () => {
            beforeEach(() => {
                const point = new Point(2, -1);
                const direction = Direction.North;
                rover = new Rover(point, direction);
            });

            it("can move forward once", () => {
                rover.acceptCommands(["f"]);

                const expected = new Point(2, 0);
                expect(rover.point).toEqual(expected);
            });

            it("can move forward twice", () => {
                rover.acceptCommands(["f", "f"]);

                const expected = new Point(2, 1);
                expect(rover.point).toEqual(expected);
            });

            it("can move backwards once", () => {
                rover.acceptCommands(["b"]);

                const expected = new Point(2, -2);
                expect(rover.point).toEqual(expected);
            });
        });

        describe("when rover is pointing South", () => {
            beforeEach(() => {
                const point = new Point(2, -1);
                const direction = Direction.South;
                rover = new Rover(point, direction);
            });

            it("can move forward once", () => {
                rover.acceptCommands(["f"]);

                const expected = new Point(2, -2);
                expect(rover.point).toEqual(expected);
            });

            it("can move backwards once", () => {
                rover.acceptCommands(["b"]);

                const expected = new Point(2, 0);
                expect(rover.point).toEqual(expected);
            });
        });

        describe("when rover is pointing West", () => {
            beforeEach(() => {
                const point = new Point(2, -1);
                const direction = Direction.West;
                rover = new Rover(point, direction);
            });

            it("can move forward once", () => {
                rover.acceptCommands(["f"]);

                const expected = new Point(1, -1);
                expect(rover.point).toEqual(expected);
            });

            it("can move backwards once", () => {
                rover.acceptCommands(["b"]);

                const expected = new Point(3, -1);
                expect(rover.point).toEqual(expected);
            });
        });

        describe("when rover is pointing East", () => {
            beforeEach(() => {
                const point = new Point(2, -1);
                const direction = Direction.East;
                rover = new Rover(point, direction);
            });

            it("can move forward once", () => {
                rover.acceptCommands(["f"]);

                const expected = new Point(3, -1);
                expect(rover.point).toEqual(expected);
            });

            it("can move backwards once", () => {
                rover.acceptCommands(["b"]);

                const expected = new Point(1, -1);
                expect(rover.point).toEqual(expected);
            });
        });
    });

    describe("Implement commands that turn the rover left/right (l,r).", () => {
        describe("when rover is pointing North", () => {
            beforeEach(() => {
                const point = new Point(2, -1);
                const direction = Direction.North;
                rover = new Rover(point, direction);
            });

            it("turns left to West", () => {
                rover.acceptCommands(["l"]);

                expect(rover.direction).toEqual(Direction.West);
            });

            it("turns right to East", () => {
                rover.acceptCommands(["r"]);

                expect(rover.direction).toEqual(Direction.East);
            });
        });

        describe("when rover is pointing South", () => {
            beforeEach(() => {
                const point = new Point(2, -1);
                const direction = Direction.South;
                rover = new Rover(point, direction);
            });

            it("turns left to East", () => {
                rover.acceptCommands(["l"]);

                expect(rover.direction).toEqual(Direction.East);
            });

            it("turns right to West", () => {
                rover.acceptCommands(["r"]);

                expect(rover.direction).toEqual(Direction.West);
            });
        });

        describe("when rover is pointing West", () => {
            beforeEach(() => {
                const point = new Point(2, -1);
                const direction = Direction.West;
                rover = new Rover(point, direction);
            });

            it("turns left to South", () => {
                rover.acceptCommands(["l"]);

                expect(rover.direction).toEqual(Direction.South);
            });

            it("turns right to North", () => {
                rover.acceptCommands(["r"]);

                expect(rover.direction).toEqual(Direction.North);
            });
        });

        describe("when rover is pointing East", () => {
            beforeEach(() => {
                const point = new Point(2, -1);
                const direction = Direction.East;
                rover = new Rover(point, direction);
            });

            it("turns left to North", () => {
                rover.acceptCommands(["l"]);

                expect(rover.direction).toEqual(Direction.North);
            });

            it("turns right to South", () => {
                rover.acceptCommands(["r"]);

                expect(rover.direction).toEqual(Direction.South);
            });
        });
    });

    describe("When the map is a simplistic 'sphere' mirroring on the center of the map", () => {
        describe("and the rover is pointing north on the top-right edge of the map", () => {
            beforeEach(() => {
                const point = new Point(5, 5);
                const direction = Direction.North;
                const mapSize = 5;
                rover = new Rover(point, direction, mapSize);
            });

            it("can move forward once", () => {
                rover.acceptCommands(["f"]);

                const expected = new Point(1, 1);
                expect(rover.point).toEqual(expected);
            });
        });
    });
});

describe("Point", () => {
    it("accepts two different coordinates", () => {
        const point = new Point(3, -2);
        expect(point.x).toEqual(3);
        expect(point.y).toEqual(-2);
    });
});

describe("Direction", () => {
    it("can be N, S, E, and W", () => {
        expect(Object.keys(Direction)).toEqual([
            "North",
            "South",
            "East",
            "West"
        ]);
    });

    describe("North", () => {
        it("moves along y", () => {
            expect(Direction.North.moveAxis).toEqual("y");
        });

        it("moves in positive direction", () => {
            expect(Direction.North.moveSign).toEqual(1);
        });

        it("rotates left to West", () => {
            expect(Direction.North.left).toEqual(Direction.West);
        });

        it("rotates right to East", () => {
            expect(Direction.North.right).toEqual(Direction.East);
        });
    });

    describe("South", () => {
        it("moves along y", () => {
            expect(Direction.South.moveAxis).toEqual("y");
        });

        it("moves in negative direction", () => {
            expect(Direction.South.moveSign).toEqual(-1);
        });

        it("rotates left to East", () => {
            expect(Direction.South.left).toEqual(Direction.East);
        });

        it("rotates right to West", () => {
            expect(Direction.South.right).toEqual(Direction.West);
        });
    });

    describe("East", () => {
        it("moves along y", () => {
            expect(Direction.East.moveAxis).toEqual("x");
        });

        it("moves in positive direction", () => {
            expect(Direction.East.moveSign).toEqual(1);
        });

        it("rotates left to North", () => {
            expect(Direction.East.left).toEqual(Direction.North);
        });

        it("rotates right to South", () => {
            expect(Direction.East.right).toEqual(Direction.South);
        });
    });

    describe("West", () => {
        it("moves along y", () => {
            expect(Direction.West.moveAxis).toEqual("x");
        });

        it("moves in negative direction", () => {
            expect(Direction.West.moveSign).toEqual(-1);
        });

        it("rotates left to South", () => {
            expect(Direction.West.left).toEqual(Direction.South);
        });

        it("rotates right to North", () => {
            expect(Direction.West.right).toEqual(Direction.North);
        });
    });
});