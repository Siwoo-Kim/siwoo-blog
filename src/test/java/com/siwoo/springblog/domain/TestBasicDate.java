package com.siwoo.springblog.domain;

import org.junit.Test;

import java.time.LocalDate;

import static junit.framework.TestCase.assertEquals;
import static junit.framework.TestCase.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:03
 **/


public class TestBasicDate {

    @Test
    public void daysFromNow() {
        BasicDate basicDate = new BasicDate(LocalDate.of(2018,5,8),LocalDate.of(2018,5,9));
        assertEquals(basicDate.daysAgo(), 1);
        basicDate = new BasicDate(LocalDate.of(2018,5,8),null);
        assertEquals(basicDate.daysAgo(), 2);
        basicDate = new BasicDate(null,null);
        assertEquals(basicDate.daysAgo(), -1);
    }
}
