package com.siwoo.springblog.converter;

import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오전 9:43
 **/

@Component
public class StringToTopicConverter implements Converter<String, Topic> {

    @Autowired
    TopicRepository topicRepository;

    @Override
    public Topic convert(String source) {
        Long topicId = Long.parseLong(source);
        return topicRepository.findById(topicId).get();
    }

}
