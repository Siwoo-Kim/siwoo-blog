package com.siwoo.springblog.domain;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-12 오후 6:10
 **/


public class TestImage {


    @Test
    public void construct() {
        String expected = "/assets/spring/test.jpg";

        Image image = new Image("test", "/assets/spring", ImageExtension.JPG);
        assertEquals(image.getFullPath(), expected);

        image = new Image("/test", "/assets/spring", ImageExtension.JPG);
        assertEquals(image.getFullPath(), expected);

        image = new Image("/test", "/assets/spring/", ImageExtension.JPG);
        assertEquals(image.getFullPath(), expected);

    }
}
