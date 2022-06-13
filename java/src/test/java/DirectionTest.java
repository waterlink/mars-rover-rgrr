import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class DirectionTest {

    @BeforeEach
    void setUp() {
        Direction.init();
    }

    @Test
    void north() {
        assertEquals("y", Direction.NORTH.moveAxis);
        assertEquals(-1, Direction.NORTH.moveSign);
        assertEquals(Direction.WEST, Direction.NORTH.left);
        assertEquals(Direction.EAST, Direction.NORTH.right);
    }

    @Test
    void south() {
        assertEquals("y", Direction.SOUTH.moveAxis);
        assertEquals(1, Direction.SOUTH.moveSign);
        assertEquals(Direction.EAST, Direction.SOUTH.left);
        assertEquals(Direction.WEST, Direction.SOUTH.right);
    }

    @Test
    void east() {
        assertEquals("x", Direction.EAST.moveAxis);
        assertEquals(1, Direction.EAST.moveSign);
        assertEquals(Direction.NORTH, Direction.EAST.left);
        assertEquals(Direction.SOUTH, Direction.EAST.right);
    }

    @Test
    void west() {
        assertEquals("x", Direction.WEST.moveAxis);
        assertEquals(-1, Direction.WEST.moveSign);
        assertEquals(Direction.SOUTH, Direction.WEST.left);
        assertEquals(Direction.NORTH, Direction.WEST.right);
    }
}
