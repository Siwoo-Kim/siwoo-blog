package com.siwoo.springblog.support;

import com.siwoo.springblog.repository.CategoryRepository;
import com.siwoo.springblog.repository.DomainRepository;
import com.siwoo.springblog.repository.ParagraphRepository;
import com.siwoo.springblog.repository.TopicRepository;
import com.siwoo.springblog.service.TopicService;
import com.siwoo.springblog.support.fixture.DomainFixtureProvider;
import com.siwoo.springblog.support.fixture.FixtureProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:40
 **/

@Component
public class DBInitializer implements CommandLineRunner {
    @Autowired
    DomainRepository domainRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    TopicRepository topicRepository;
    @Autowired
    TopicService topicService;
    @Autowired
    ParagraphRepository paragraphRepository;

    @Override
    public void run(String... args) throws Exception {

        domainRepository.saveAll(FixtureProvider.domains());
        categoryRepository.saveAll(FixtureProvider.categories());
        FixtureProvider.topics(categoryRepository).forEach(topic -> topicService.save(topic));
        paragraphRepository.saveAll(FixtureProvider.paragraphs(topicRepository));
        //topicRepository.findAll().stream().forEach(System.out::println);
    }
}
