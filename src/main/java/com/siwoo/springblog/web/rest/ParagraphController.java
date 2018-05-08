package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.Paragraph;
import com.siwoo.springblog.domain.Topic;
import com.siwoo.springblog.repository.ParagraphRepository;
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
 * @since 2018-05-07 오후 2:02
 **/

@RestController
@RequestMapping("/rest/paragraph")
public class ParagraphController {

    @Autowired
    ParagraphRepository paragraphRepository;

    @GetMapping
    public List<Paragraph> all() {
        return paragraphRepository.findAll();
    }

    @GetMapping(params = "by=topic")
    public List<Paragraph> byTopic(@RequestParam("value") Topic topic) {
        return paragraphRepository.findByTopic(topic);
    }
}
