class Point {
    int x;
    int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    Point forward(Direction direction) {
        return this.move(direction.moveAxis, direction.moveSign);
    }

    Point backward(Direction direction) {
        return this.move(direction.moveAxis, -direction.moveSign);
    }

    private Point  move(String axis, int increment) {
        Point point = new Point(this.x, this.y);

        if (axis.equals("y")) point.y += increment;
        if (axis.equals("x")) point.x += increment;
        return point;
    }

    @Override
    public String toString() {
        return "{" + this.x + "," + this.y + "}";
    }

    @Override
    public boolean equals(Object other) {
        if (other == null) return false;
        if (!(other instanceof Point)) return false;

        Point point = (Point) other;
        return point.x == x && point.y == y;
    }
}