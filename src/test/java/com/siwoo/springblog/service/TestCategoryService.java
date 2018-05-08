package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.support.TopicList;
import com.siwoo.springblog.repository.CategoryRepository;
import com.siwoo.springblog.repository.TestRepositorySupporter;
import com.siwoo.springblog.repository.TopicRepository;
import com.siwoo.springblog.support.fixture.FixtureProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 2:18
 **/
@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class TestCategoryService extends TestRepositorySupporter {
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    TopicRepository topicRepository;
    @Autowired
    CategoryService categoryService;

    @Test
    public void findAllCategoryList() {
        categoryRepository.saveAll(FixtureProvider.categories());
        topicRepository.saveAll(FixtureProvider.topics(categoryRepository));

        List<TopicList> found = categoryService.allTopicLists();
        System.out.println(found);
        assertTrue(found.size() == categoryRepository.count());

    }
}
