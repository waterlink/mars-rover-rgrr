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
                Point point = this.point.forward(this.direction);
                if (this.landscape.isObstacle(point)) {
                    throw new ObstacleDetected();
                }
                this.point = point;
            }

            if (command.equals("b")) {
                this.point = this.point.backward(this.direction);
            }

            if (command.equals("l")) {
                this.direction = this.direction.left;
            }

            if (command.equals("r")) {
                this.direction = this.direction.right;
            }
        });
    }
}