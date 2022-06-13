import java.util.ArrayList;
import java.util.List;

public class Landscape {
    private List<Point> obstacles = new ArrayList<>();

    public void addObstacle(Point obstacle) {
        obstacles.add(obstacle);
    }

    public boolean isObstacle(Point point) {
        return obstacles.contains(point);
    }
}
