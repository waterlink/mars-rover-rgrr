import org.junit.jupiter.api.*;

import java.util.Arrays;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class RoverTest {

    private Landscape landscape;

    @BeforeAll
    static void setUpAll() {
        Direction.init();
    }

    @BeforeEach
    void setUp() {
        landscape = new Landscape();
    }

    @Test
    void init_starting_point_and_direction() {
        Point point = new Point(1, 2);
        Direction direction = Direction.EAST;

        Rover rover = new Rover(landscape, point, direction);

        assertEquals(point, rover.point);
        assertEquals(direction, rover.direction);
    }

    @Test
    void when_pointing_north_move_forward_once() {
        Point point = new Point(2, 3);
        Direction direction = Direction.NORTH;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("f"));

        Point expected = new Point(2, 2);
        assertEquals(expected, rover.point);
    }

    @Test
    void when_pointing_north_move_forward_twice() {
        Point point = new Point(2, 3);
        Direction direction = Direction.NORTH;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("f", "f"));

        Point expected = new Point(2, 1);
        assertEquals(expected, rover.point);
    }

    @Test
    void when_pointing_north_move_backwards_once() {
        Point point = new Point(2, 3);
        Direction direction = Direction.NORTH;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("b"));

        Point expected = new Point(2, 4);
        assertEquals(expected, rover.point);
    }

    @Test
    void when_pointing_south_move_forward_once() {
        Point point = new Point(2, 3);
        Direction direction = Direction.SOUTH;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("f"));

        Point expected = new Point(2, 4);
        assertEquals(expected, rover.point);
    }

    @Test
    void when_pointing_south_move_backwards_once() {
        Point point = new Point(2, 3);
        Direction direction = Direction.SOUTH;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("b"));

        Point expected = new Point(2, 2);
        assertEquals(expected, rover.point);
    }

    @Test
    void when_pointing_east_move_forward_once() {
        Point point = new Point(2, 3);
        Direction direction = Direction.EAST;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("f"));

        Point expected = new Point(3, 3);
        assertEquals(expected, rover.point);
    }

    @Test
    void when_pointing_east_move_backwards_once() {
        Point point = new Point(2, 3);
        Direction direction = Direction.EAST;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("b"));

        Point expected = new Point(1, 3);
        assertEquals(expected, rover.point);
    }

    @Test
    void when_pointing_west_move_forward_once() {
        Point point = new Point(2, 3);
        Direction direction = Direction.WEST;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("f"));

        Point expected = new Point(1, 3);
        assertEquals(expected, rover.point);
    }

    @Test
    void when_pointing_west_move_backwards_once() {
        Point point = new Point(2, 3);
        Direction direction = Direction.WEST;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("b"));

        Point expected = new Point(3, 3);
        assertEquals(expected, rover.point);
    }

    @Test
    void left_rotations() {
        Point point = new Point(2, 3);
        Direction direction = Direction.NORTH;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("l"));
        assertEquals(Direction.WEST, rover.direction);

        rover.acceptCommands(Arrays.asList("l"));
        assertEquals(Direction.SOUTH, rover.direction);

        rover.acceptCommands(Arrays.asList("l"));
        assertEquals(Direction.EAST, rover.direction);

        rover.acceptCommands(Arrays.asList("l"));
        assertEquals(Direction.NORTH, rover.direction);
    }

    @Test
    void right_rotations() {
        Point point = new Point(2, 3);
        Direction direction = Direction.NORTH;
        Rover rover = new Rover(landscape, point, direction);

        rover.acceptCommands(Arrays.asList("r"));
        assertEquals(Direction.EAST, rover.direction);

        rover.acceptCommands(Arrays.asList("r"));
        assertEquals(Direction.SOUTH, rover.direction);

        rover.acceptCommands(Arrays.asList("r"));
        assertEquals(Direction.WEST, rover.direction);

        rover.acceptCommands(Arrays.asList("r"));
        assertEquals(Direction.NORTH, rover.direction);
    }

    @Test
    void detects_an_obstacle_when_moving_forward_and_does_not_move_to_an_obstacle() {
        Point point = new Point(2, 3);
        Direction direction = Direction.NORTH;
        Rover rover = new Rover(landscape, point, direction);

        Point obstacle = new Point(2, 2);
        landscape.addObstacle(obstacle);

        assertThrows(ObstacleDetected.class, () -> rover.acceptCommands(Arrays.asList("f")));
        Point expected = new Point(2, 3);
        assertEquals(expected, rover.point);
    }

    @Test
    void detects_an_obstacle_when_moving_backward_and_does_not_move_to_an_obstacle() {
        Point point = new Point(2, 3);
        Direction direction = Direction.NORTH;
        Rover rover = new Rover(landscape, point, direction);

        Point obstacle = new Point(2, 4);
        landscape.addObstacle(obstacle);

        assertThrows(ObstacleDetected.class, () -> rover.acceptCommands(Arrays.asList("b")));
        Point expected = new Point(2, 3);
        assertEquals(expected, rover.point);
    }
}
