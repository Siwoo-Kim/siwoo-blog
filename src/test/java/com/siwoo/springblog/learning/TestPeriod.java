package com.siwoo.springblog.learning;

import org.junit.Test;

import java.time.LocalDate;
import java.time.Period;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 3:58
 **/


public class TestPeriod {

    @Test
    public void fromNow() {

        LocalDate localDate = LocalDate.of(2018,5,1);
        Period period = Period.between(localDate, LocalDate.now());
        System.out.println(period.getDays());
    }
}
