package com.siwoo.springblog.domain.support;

import org.junit.Test;
import org.springframework.util.StringUtils;

import java.util.Arrays;

import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 6:16
 **/


public class TestCategorySearch {

    @Test
    public void constructor() {
        final String value = "value";
        CategorySearch categorySearch = new CategorySearch("", CategorySearch.Type.ALL);
        assertTrue(categorySearch.isEmpty());

        categorySearch = new CategorySearch(null, CategorySearch.Type.ALL);
        assertTrue(categorySearch.isEmpty());

        categorySearch = new CategorySearch(value, null);
        assertTrue(categorySearch.isEmpty());

        categorySearch = new CategorySearch(value, new CategorySearch.Type[]{});
        assertTrue(categorySearch.isEmpty());

        categorySearch = new CategorySearch(value, CategorySearch.Type.ALL);
        assertTrue(StringUtils.hasText(value));
        assertTrue(categorySearch.getTypes().size() == CategorySearch.Type.values().length);
        System.out.println(categorySearch.getTypes());

        categorySearch = new CategorySearch(value, CategorySearch.Type.SHORT_DESCRIPTION, CategorySearch.Type.NAME);
        assertTrue(StringUtils.hasText(value));
        assertTrue(categorySearch.getTypes().size() == 2);
        System.out.println(categorySearch.getTypes());


    }


}
