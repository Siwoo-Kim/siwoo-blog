package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.domain.support.TopicSearch;
import com.siwoo.springblog.support.DBInitializer;
import com.siwoo.springblog.support.fixture.FixtureProvider;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 1:30
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class TestTopicRepository extends TestRepositorySupporter {

    @Autowired
    TopicRepository topicRepository;
    @Autowired
    CategoryRepository categoryRepository;

    @Test
    public void findByCategoryName() {
        final String categoryName = "test";
        Category category = new Category();
        category.setName(categoryName);
        categoryRepository.save(category);

        Topic topic = new Topic();
        topic.setName("testtopic1");
        topic.setCategory(category);
        topicRepository.save(topic);
        Topic topic1 = topic;

        topic = new Topic();
        topic.setName("testtopic2");
        topic.setCategory(category);
        topicRepository.save(topic);
        Topic topic2 = topic;

        topic = new Topic();
        topic.setName("testtopic3");
        topicRepository.save(topic);
        Topic topic3 = topic;

        List<Topic> found = topicRepository.findByCategoryName(categoryName);
        assertEquals(found.size(), 2);
        assertTrue(found.contains(topic1));
        assertTrue(found.contains(topic2));
    }

    @Test
    public void findByCategory() {
        final String categoryName = "test";
        Category category = new Category();
        category.setName(categoryName);
        categoryRepository.save(category);

        Topic topic = new Topic();
        topic.setName("testtopic1");
        topic.setCategory(category);
        topicRepository.save(topic);
        Topic topic1 = topic;

        topic = new Topic();
        topic.setName("testtopic2");
        topic.setCategory(category);
        topicRepository.save(topic);
        Topic topic2 = topic;

        topic = new Topic();
        topic.setName("testtopic3");
        topicRepository.save(topic);
        Topic topic3 = topic;

        List<Topic> found = topicRepository.findByCategory(category);
        assertEquals(found.size(), 2);
        assertTrue(found.contains(topic1));
        assertTrue(found.contains(topic2));
    }

    @Autowired DBInitializer dbInitializer;

    @Test
    public void searchAny() throws Exception {
        dbInitializer.run("test");
        assertTrue(topicRepository.count() > 1);

        List<Topic> topics = topicRepository.searchAny(new TopicSearch("test", TopicSearch.Type.ALL));

    }
}
