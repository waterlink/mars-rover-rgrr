class Direction {
    String moveAxis;
    int moveSign;
    Direction left;
    Direction right;

    Direction(String moveAxis, int moveSign) {
        this.moveAxis = moveAxis;
        this.moveSign = moveSign;
        this.left = null;
        this.right = null;
    }

    @Override
    public String toString() {
        return "{" + this.moveAxis + "," + this.moveSign + "}";
    }

    static Direction NORTH = new Direction("y", -1);
    static Direction SOUTH = new Direction("y", 1);
    static Direction WEST = new Direction("x", -1);
    static Direction EAST = new Direction("x", 1);

    static void init() {
        NORTH.left = WEST;
        NORTH.right = EAST;

        SOUTH.left = EAST;
        SOUTH.right = WEST;

        EAST.left = NORTH;
        EAST.right = SOUTH;

        WEST.left = SOUTH;
        WEST.right = NORTH;
    }
}