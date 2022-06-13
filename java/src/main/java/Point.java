class Point {
    int x;
    int y;

    Point(int x, int y) {
        this.x = x;
        this.y = y;
    }

    void forward(Direction direction) {
        this.move(direction.moveAxis, direction.moveSign);
    }

    void backward(Direction direction) {
        this.move(direction.moveAxis, -direction.moveSign);
    }

    private void move(String axis, int increment) {
        if (axis.equals("y")) this.y += increment;
        if (axis.equals("x")) this.x += increment;
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