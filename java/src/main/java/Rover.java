import java.util.*;

class Rover {
    private final Landscape landscape;

    Point point;
    Direction direction;

    Rover(Landscape landscape, Point point, Direction direction) {
        this.landscape = landscape;
        this.point = point;
        this.direction = direction;
    }

    void acceptCommands(List<String> commands) {
        commands.forEach((command) -> {
            if (command.equals("f")) {
                Point newPoint = point.forward(direction);
                moveTo(newPoint);
            }

            if (command.equals("b")) {
                Point newPoint = point.backward(direction);
                moveTo(newPoint);
            }

            if (command.equals("l")) {
                direction = direction.left;
            }

            if (command.equals("r")) {
                direction = direction.right;
            }
        });
    }

    private void moveTo(Point newPoint) {
        if (landscape.isObstacle(newPoint)) {
            throw new ObstacleDetected();
        }
        point = newPoint;
    }
}