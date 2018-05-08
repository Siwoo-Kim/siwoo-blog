package com.siwoo.springblog.domain.support;

import org.junit.Test;
import org.springframework.util.StringUtils;

import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오후 6:48
 **/


public class TestTopicSearch {

    @Test
    public void constructor() {
        final String value = "value";
        TopicSearch topicSearch = new TopicSearch("", TopicSearch.Type.ALL);
        assertTrue(topicSearch.isEmpty());

        topicSearch = new TopicSearch(null, TopicSearch.Type.ALL);
        assertTrue(topicSearch.isEmpty());

        topicSearch = new TopicSearch(value, null);
        assertTrue(topicSearch.isEmpty());

        topicSearch = new TopicSearch(value, new TopicSearch.Type[]{});
        assertTrue(topicSearch.isEmpty());

        topicSearch = new TopicSearch(value, TopicSearch.Type.ALL);
        assertTrue(StringUtils.hasText(value));
        assertTrue(topicSearch.getTypes().size() == TopicSearch.Type.values().length);
        System.out.println(topicSearch.getTypes());

        topicSearch = new TopicSearch(value, TopicSearch.Type.SHORT_DESCRIPTION, TopicSearch.Type.NAME);
        assertTrue(StringUtils.hasText(value));
        assertTrue(topicSearch.getTypes().size() == 2);
        System.out.println(topicSearch.getTypes());
    }

}
