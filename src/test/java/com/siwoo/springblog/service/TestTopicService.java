package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.Topic;
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

import static org.junit.Assert.*;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 6:39
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class TestTopicService extends TestRepositorySupporter {

    @Autowired TopicServiceImpl topicService;
    @Autowired
    TopicRepository topicRepository;
    @Autowired
    CategoryRepository categoryRepository;


    @Test
    public void anyIndexed() {
        Category category = new Category();
        categoryRepository.save(category);
        Topic topic = new Topic();
        topic.setIndex(0);
        topic.setCategory(category);
        topicRepository.save(topic);

        boolean indexed = topicService.anyIndexed(category);
        assertTrue(indexed);

        category = new Category();
        categoryRepository.save(category);
        topicRepository.save(topic);

        indexed = topicService.anyIndexed(category);
        assertFalse(indexed);
    }

    @Test
    public void save() {
        categoryRepository.saveAll(FixtureProvider.categories());
        FixtureProvider.topics(categoryRepository).forEach(topic -> topicService.save(topic));

        topicRepository.findAll().forEach(topic -> {
            System.out.println("Category Id: " + topic.getCategory().getId() + ", Topic Index :" + topic.getIndex());
            assertNotNull(topic.getIndex());
        });
    }

    @Test
    public void nextTopic() {
        categoryRepository.saveAll(FixtureProvider.categories());
        FixtureProvider.topics(categoryRepository).forEach(topic -> topicService.save(topic));

        topicRepository.findAll().forEach(topic -> {
            Topic nextTopic = topicService.nextTopic(topic);
            if(nextTopic != null) {
                System.out.println("Prev Index: "+ topic.getIndex() + ", NextTopic Index: "+ nextTopic.getIndex());
                assertTrue(nextTopic.getIndex() == (topic.getIndex() + 1));
            }
        });


    }
}
