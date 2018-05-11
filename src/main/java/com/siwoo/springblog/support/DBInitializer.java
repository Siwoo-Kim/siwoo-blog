package com.siwoo.springblog.support;

import com.siwoo.springblog.domain.Blogger;
import com.siwoo.springblog.domain.BloggerRole;
import com.siwoo.springblog.repository.CategoryRepository;
import com.siwoo.springblog.repository.DomainRepository;
import com.siwoo.springblog.repository.ParagraphRepository;
import com.siwoo.springblog.repository.TopicRepository;
import com.siwoo.springblog.service.BloggerService;
import com.siwoo.springblog.service.NoticeService;
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
    @Autowired
    BloggerService bloggerService;
    @Autowired
    NoticeService noticeService;

    @Autowired
    AdminProperties adminProperties;

    @Override
    public void run(String... args) throws Exception {

        domainRepository.saveAll(FixtureProvider.domains());
        categoryRepository.saveAll(FixtureProvider.categories());
        FixtureProvider.topics(categoryRepository).forEach(topic -> topicService.save(topic));
        paragraphRepository.saveAll(FixtureProvider.paragraphs(topicRepository));

        Blogger admin = new Blogger();
        admin.setEmail(adminProperties.getEmail());
        admin.setPassword(adminProperties.getPassword());
        admin.setName(adminProperties.getName());
        admin.setNickName(adminProperties.getNickName());
        admin.setAvatarImgName("siwoo-img.jpg");
        admin.addRole(new BloggerRole(BloggerRole.Role.ADMIN));
        admin.addRole(new BloggerRole(BloggerRole.Role.GUEST));
        bloggerService.join(admin);

        FixtureProvider.notices(admin)
                .forEach(notice -> noticeService.announce(notice));

    }
}
