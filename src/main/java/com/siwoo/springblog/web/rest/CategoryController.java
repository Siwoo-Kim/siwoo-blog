package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.Category;
import static com.siwoo.springblog.domain.support.CategorySearch.Type.*;
import com.siwoo.springblog.domain.support.CategorySearch;
import com.siwoo.springblog.domain.support.TopicList;

import com.siwoo.springblog.repository.CategoryRepository;
import com.siwoo.springblog.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:58
 **/

@RestController
@RequestMapping("/rest/category")
public class CategoryController {

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    CategoryService categoryService;

    @GetMapping
    public List<Category> all() {
        return categoryRepository.findAll();
    }

    @GetMapping(params = "by=name")
    public Category byName(@RequestParam("value") Category category) {
        return category;
    }

    @GetMapping(params = "request=topicLists")
    public List<TopicList> allTopicLists() {
        return categoryService.allTopicLists();
    }


    @GetMapping(params = {"by=search","term=any"})
    public List<Category> searchAny(@RequestParam String value) {
        return categoryRepository.searchAny(new CategorySearch(value,ALL));
    }
}
