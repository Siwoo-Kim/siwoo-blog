package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.domain.support.CategorySearch;
import com.siwoo.springblog.domain.support.TopicList;
import com.siwoo.springblog.support.fixture.FixtureProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 2:02
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class TestCategoryRepository extends TestRepositorySupporter {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    TopicRepository topicRepository;

    @Test
    public void findAllCategoryList() {
        categoryRepository.saveAll(FixtureProvider.categories());
        topicRepository.saveAll(FixtureProvider.topics(categoryRepository));

        List<TopicList> found = categoryRepository.findAllTopicList();
        System.out.println(found);
        assertTrue(found.size() == categoryRepository.count());
    }

    @Test
    public void findMaxIndexByCategory() {
        Category category = new Category();
        categoryRepository.save(category);

        Topic topic = new Topic();
        topic.setIndex(5);
        topic.setCategory(category);
        topicRepository.save(topic);

        int index = topicRepository.findMaxIndexByCategory(category).orElseGet(null);
        assertTrue(index == 5);

        category = new Category();
        categoryRepository.save(category);

        topic = new Topic();
        topic.setIndex(0);
        topic.setCategory(category);
        topicRepository.save(topic);

        index = topicRepository.findMaxIndexByCategory(category).orElseGet(null);
        assertTrue(index == 0);

        topicRepository.deleteAll();
        topic = new Topic();
        topic.setIndex(5);
        topic.setCategory(category);
        topicRepository.save(topic);

        index = topicRepository.findMaxIndexByCategory(category).orElseGet(null);
        assertTrue(index == 5);
    }

    @Test
    public void findMaxIndexedTopicByCategory() {
        Category category = new Category();
        categoryRepository.save(category);

        Topic topic = new Topic();
        topic.setIndex(0);
        topic.setCategory(category);
        topicRepository.save(topic);

        Topic found = topicRepository.findMaxIndexedTopicByCategory(category);
        assertTrue(found.indexed());
        assertTrue(found.getIndex() == 0);
        assertTrue(found.getNextIndex() == 1);

        Topic topic2 = new Topic();
        topic2.setIndex(topic.getNextIndex());
        topic2.setCategory(category);
        topicRepository.save(topic2);

        found = topicRepository.findMaxIndexedTopicByCategory(category);
        assertTrue(found.indexed());
        assertTrue(found.getIndex() == 1);
        assertTrue(found.getNextIndex() == 2);

        Topic topic3 = new Topic();
        topic3.setIndex(topic2.getNextIndex());
        topic3.setCategory(category);
        topicRepository.save(topic3);

        found = topicRepository.findMaxIndexedTopicByCategory(category);
        assertTrue(found.indexed());
        assertTrue(found.getIndex() == 2);
        assertTrue(found.getNextIndex() == 3);

        Category category1 = new Category();
        categoryRepository.save(category1);
        boolean isIndexed = topicRepository.findMaxIndexByCategory(category1)
                .isPresent();
        assertFalse(isIndexed);
    }

    @Test
    public void searchAny() {
        categoryRepository.saveAll(FixtureProvider.categories());

        CategorySearch categorySearch = new CategorySearch("orm", CategorySearch.Type.ALL);
        System.out.println(categorySearch.getTypes());
        List<Category> found = categoryRepository.searchAny(categorySearch);
        assertTrue(!found.isEmpty());
        found.stream().forEach(category -> System.out.println(category));
    }
}

















