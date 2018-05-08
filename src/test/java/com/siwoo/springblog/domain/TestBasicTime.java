package com.siwoo.springblog.domain;

import org.junit.Test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:18
 **/


public class TestBasicTime {

    @Test
    public void newBasicTime() {
        BasicTime basicTime = BasicTime.newBasicTime();
        assertNull(basicTime.getUpdated());
        assertNotNull(basicTime.getCreated());
    }

}
