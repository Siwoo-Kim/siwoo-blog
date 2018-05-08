package com.siwoo.springblog.converter;

import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.repository.TestRepositorySupporter;
import com.siwoo.springblog.repository.TopicRepository;
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
 * @since 2018-05-07 오전 9:45
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestStringToTopicConverter extends TestRepositorySupporter {

    @Autowired StringToTopicConverter converter;
    @Autowired TopicRepository topicRepository;

    @Test
    public void convert() {
        Topic topic = new Topic();
        topicRepository.save(topic);

        Topic converted = converter.convert(topic.getId().toString());
        assertEquals(topic, converted);
    }
}
