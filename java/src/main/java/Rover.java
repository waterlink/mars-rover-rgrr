import java.util.*;

class Rover {
    Point point;
    Direction direction;

    Rover(Point point, Direction direction) {
        this.point = point;
        this.direction = direction;
    }

    void acceptCommands(List<String> commands) {
        commands.forEach((command) -> {
            if (command.equals("f")) {
                this.point.forward(this.direction);
            }

            if (command.equals("b")) {
                this.point.backward(this.direction);
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