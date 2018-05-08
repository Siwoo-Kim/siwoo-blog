package com.siwoo.springblog.repository;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오전 9:08
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
public class TestRepositorySupporter  {

    @Autowired DomainRepository domainRepository;

    @Autowired CategoryRepository categoryRepository;

    @Autowired TopicRepository topicRepository;

    @Autowired ParagraphRepository paragraphRepository;

    @Before
    public void setup() {
        domainRepository.deleteAll();
        categoryRepository.deleteAll();
        topicRepository.deleteAll();
        paragraphRepository.deleteAll();
    }

    @Test
    public void ignore() {
        /*ignore*/
    }

    @After
    public void destroy() {
    }
}
