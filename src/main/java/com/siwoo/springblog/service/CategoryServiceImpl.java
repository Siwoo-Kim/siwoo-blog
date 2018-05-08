package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.support.TopicList;
import com.siwoo.springblog.repository.CategoryRepository;
import com.siwoo.springblog.repository.TopicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 2:00
 **/

@Service
public class CategoryServiceImpl implements CategoryService {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    TopicRepository topicRepository;

    /*TopicList List has short information for Category and topic*/
    @Override
    public List<TopicList> allTopicLists() {
        List<TopicList> categoryLists = categoryRepository.findAllTopicList();
        categoryLists.stream().forEach(list ->
                list.setTopicItems(topicRepository.findTopicItemByCategoryName(list.getCategoryName())));
        return categoryLists;
    }
}
