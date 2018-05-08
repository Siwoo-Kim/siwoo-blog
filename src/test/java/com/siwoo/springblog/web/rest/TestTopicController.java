package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.repository.TopicRepository;
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
 * @since 2018-05-06 오후 1:41
 **/

@RunWith(SpringRunner.class)
@SpringBootTest
@Transactional
public class TestTopicController {

    TestRestTemplate restTemplate = new TestRestTemplate();
    URI baseUri = UriComponentsBuilder.fromUriString("http://localhost:8080/rest/topic").build().toUri();

    @Autowired
    TopicRepository topicRepository;

    @Test
    public void byCategory() {
        final String categoryName = "spring";
        URI byCategoryUri = UriComponentsBuilder.fromUri(baseUri)
                .queryParam("by","category")
                .queryParam("value",categoryName)
                .build()
                .toUri();

        List<Topic> found = restTemplate.getForObject(byCategoryUri, new ArrayList<Topic>().getClass());
        assertTrue(found.size()==topicRepository.countByCategoryName(categoryName));
    }
}
