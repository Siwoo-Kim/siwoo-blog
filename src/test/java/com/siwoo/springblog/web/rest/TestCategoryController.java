package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.repository.CategoryRepository;
import com.siwoo.springblog.repository.TestRepositorySupporter;
import com.siwoo.springblog.support.fixture.FixtureProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:59
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class TestCategoryController extends TestRepositorySupporter {

    TestRestTemplate restTemplate = new TestRestTemplate();
    @Autowired
    CategoryRepository categoryRepository;

    URI baseUrl = UriComponentsBuilder.fromUriString("http://localhost:8080/rest/category").build().toUri();

    @Test
    public void all() {
        categoryRepository.saveAll(FixtureProvider.categories());
        List<Category> categories = restTemplate.getForObject(baseUrl, List.class);
        assertTrue(categoryRepository.count() == categories.size());
    }
}
