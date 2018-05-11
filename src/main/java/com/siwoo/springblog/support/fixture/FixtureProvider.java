package com.siwoo.springblog.support.fixture;

import com.siwoo.springblog.domain.*;
import com.siwoo.springblog.repository.BloggerRepository;
import com.siwoo.springblog.repository.CategoryRepository;
import com.siwoo.springblog.repository.TopicRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-05 오후 6:39
 **/


public class FixtureProvider {

    public static List<Domain> domains() {
        return DomainFixtureProvider.domains();
    }

    public static List<Category> categories() {
        return CategoryFixtureProvider.categories();
    }

    public static List<Topic> topics(CategoryRepository categoryRepository) {
        List topics = new ArrayList();

        List springTopics = TopicFixtureProvider.springTopics(categoryRepository.findByName("spring"));
        List hibernateTopics = TopicFixtureProvider.hibernateTopics(categoryRepository.findByName("hibernate"));

        topics.addAll(springTopics);
        topics.addAll(hibernateTopics);

        return topics;
    }

    public static List<Paragraph> paragraphs(TopicRepository topicRepository) {
        List paragraphs = new ArrayList();
        topicRepository.findAll().forEach(topic -> {
            paragraphs.addAll(ParagraphFixtureProvider.paragraphs(topic));
        });

        return paragraphs;
    }

    public static List<Notice> notices(Blogger adminBlogger) {
        return NoticeFixtureProvider.notices(adminBlogger);
    }

}
