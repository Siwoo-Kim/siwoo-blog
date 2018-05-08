package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.Category;
import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.domain.support.TopicSearch;
import com.siwoo.springblog.repository.TopicRepository;
import com.siwoo.springblog.service.TopicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import static com.siwoo.springblog.domain.support.TopicSearch.Type.ALL;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-06 오후 1:34
 **/

@RestController
@RequestMapping("/rest/topic")
public class TopicController {

    @Autowired
    TopicRepository topicRepository;

    @Autowired
    TopicService topicService;

    @GetMapping
    public List<Topic> all() {
        return topicRepository.findAll();
    }

    @GetMapping(params = "by=category")
    public List<Topic> byCategory(@RequestParam("value") Category category) {
        return topicRepository.findByCategory(category);
    }

    @GetMapping("/{id}")
    public Topic byId(@PathVariable("id") Topic topic) {
        return topic;
    }

    @GetMapping(params = "by=index")
    public Topic byIndex(@RequestParam("value") Topic topic) {
        return this.topicService.nextTopic(topic);
    }

    @GetMapping(params = {"by=search","term=any"})
    public List<Topic> searchAny(@RequestParam String value) {
        return topicRepository.searchAny(new TopicSearch(value,ALL));
    }

}
