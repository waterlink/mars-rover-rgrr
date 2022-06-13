import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

@DisplayNameGeneration(DisplayNameGenerator.ReplaceUnderscores.class)
public class PointTest {

    @Test
    void has_x_and_y() {
        Point point = new Point(2, 3);
        assertEquals(2, point.x);
        assertEquals(3, point.y);

        point = new Point(Integer.MAX_VALUE, Integer.MAX_VALUE);
        assertEquals(Integer.MAX_VALUE, point.x);
        assertEquals(Integer.MAX_VALUE, point.y);

        point = new Point(Integer.MAX_VALUE+1, Integer.MAX_VALUE+1);
        assertEquals(Integer.MIN_VALUE, point.x);
        assertEquals(Integer.MIN_VALUE, point.y);
    }
}
