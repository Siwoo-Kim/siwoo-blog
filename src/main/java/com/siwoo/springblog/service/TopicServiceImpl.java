package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 6:08
 **/

@Service
public class TopicServiceImpl implements TopicService {

    @Autowired
    TopicRepository topicRepository;

    @Override
    public Topic save(Topic topic) {
        validateCategory(topic);
        assignIndex(topic);
        topicRepository.save(topic);
        return topic;
    }

    public Topic nextTopic(Topic topic) {
        validateCategory(topic);
        return topicRepository.findByIndexAndCategory(topic.getCategory(), topic.getNextIndex());
    }

    private void assignIndex(Topic topic) {
        if (anyIndexed(topic.getCategory())) {
            Topic prevTopic = topicRepository.findMaxIndexedTopicByCategory(topic.getCategory());
            topic.setIndex(prevTopic.getNextIndex());
            topicRepository.save(topic);
        } else {
            topic.setIndex(0);
        }
    }

    public boolean anyIndexed(Category category) {
        return topicRepository.findMaxIndexByCategory(category).isPresent();
    }

    private void validateCategory(Topic topic) {
        if (!hasCategory(topic)) {
            throw new IllegalStateException("Topic must assigned to category");
        }
    }

    private boolean hasCategory(Topic topic) {
        return topic.getCategory() != null;
    }
}
