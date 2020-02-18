package pl.dopiatku.byle.api;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class IsItFridayTest {

    @Test
    void rootContext() {
        IsItFriday rootContextTest = new IsItFriday();
        assertNotNull(rootContextTest.rootContext());
        assertTrue(rootContextTest.rootContext().equals("Yup?"));
    }

    @Test
    void isItFryday() {
        IsItFriday isItFrydayTest = new IsItFriday();
        assertNotNull(isItFrydayTest.isItFryday());

    }

    @Test
    void allFridays() {
        IsItFriday allFridaysTest = new IsItFriday();
        assertNotNull(allFridaysTest.allFridays());
    }

    @Test
    void calendarProps() {
        IsItFriday calendarPropsTest = new IsItFriday();
        assertNotNull(calendarPropsTest.calendarProps());
    }

    @Test
    void coffey() {
        IsItFriday coffeyTest = new IsItFriday();
        assertNotNull(coffeyTest.coffey());
        assertTrue(coffeyTest.coffey().equals("I am a teapot!"));
    }
}