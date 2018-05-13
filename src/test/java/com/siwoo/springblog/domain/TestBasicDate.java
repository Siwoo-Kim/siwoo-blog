package com.siwoo.springblog.domain;

import org.junit.Test;

import java.time.LocalDate;
import java.time.Period;

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
    public void daysAgo() {
        LocalDate created = LocalDate.of(2018, 5, 8);
        LocalDate upadted = LocalDate.of(2018, 5, 9);
        BasicDate basicDate = new BasicDate(created, upadted);
        Period period = Period.between(upadted, LocalDate.now());
        assertEquals(basicDate.daysAgo(), period.getYears() + " years, " + period.getMonths() + " months, " + period.getDays() + " days ago");
        basicDate = new BasicDate(created, null);
        period = Period.between(created, LocalDate.now());
        assertEquals(basicDate.daysAgo(), period.getYears() + " years, " + period.getMonths() + " months, " + period.getDays() + " days ago");
        basicDate = new BasicDate(null, null);
        assertEquals(basicDate.daysAgo(), "Time not saved");
    }


}
