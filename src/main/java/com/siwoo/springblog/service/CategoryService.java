package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.support.TopicList;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author SiWoo Kim, 
 * @email sm123tt@gmail.com
 * @version 1.0.0
 * @since 2018-05-06 오후 1:58
 * @github : https://github.com/Siwoo-Kim
 **/

@Transactional(readOnly = true)
public interface CategoryService {

    List<TopicList> allTopicLists();

}
