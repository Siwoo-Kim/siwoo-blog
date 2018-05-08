package com.siwoo.springblog.converter;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.repository.CategoryRepository;
import com.siwoo.springblog.repository.TestRepositorySupporter;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertEquals;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 1:50
 **/


@RunWith(SpringRunner.class)
@SpringBootTest
public class TestStringToCategoryConverter extends TestRepositorySupporter {

    @Autowired
    StringToCategoryConverter converter;
    @Autowired
    CategoryRepository categoryRepository;

    @Test
    public void convert() {
        final String categoryName = "test";
        Category category = new Category();
        category.setName(categoryName);
        categoryRepository.save(category);

        Category converted = converter.convert(categoryName);
        assertEquals(converted, category);
    }


}
