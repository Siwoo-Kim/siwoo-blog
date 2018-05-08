package com.siwoo.springblog.domain;

import org.junit.Test;

import static org.junit.Assert.*;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 6:16
 **/
public class TestTopic {

    @Test(expected = IllegalStateException.class)
    public void getNextIndex() {
        Topic topic = new Topic();
        assertTrue(topic.getIndex() == null);
        assertFalse(topic.indexed());
        topic.getNextIndex();
        fail();
    }

}
