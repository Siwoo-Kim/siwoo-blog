package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Topic;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 6:08
 **/

@Transactional(readOnly = true)
public interface TopicService {

    @Transactional(readOnly = false)
    Topic save(Topic topic);
    Topic nextTopic(Topic topic);

}
