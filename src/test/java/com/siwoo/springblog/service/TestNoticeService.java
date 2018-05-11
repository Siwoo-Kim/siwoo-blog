package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Blogger;
import com.siwoo.springblog.domain.BloggerRole;
import com.siwoo.springblog.domain.Notice;
import com.siwoo.springblog.repository.BloggerRepository;
import com.siwoo.springblog.repository.NoticeRepository;
import com.siwoo.springblog.repository.TestRepositorySupporter;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:21
 **/

@Slf4j
@RunWith(SpringRunner.class)
@SpringBootTest
public class TestNoticeService extends TestRepositorySupporter {

    @Autowired NoticeService noticeService;
    @Autowired
    BloggerRepository bloggerRepository;
    @Autowired
    NoticeRepository noticeRepository;

    @Test
    public void announce() {
        Blogger blogger = new Blogger();

        blogger.addRole(new BloggerRole(BloggerRole.Role.ADMIN));
        assertTrue(blogger.hasRole(BloggerRole.Role.ADMIN));
        bloggerRepository.save(blogger);

        Notice notice = new Notice();
        notice.setBlogger(blogger);
        noticeService.announce(notice);

        Notice found = noticeRepository.findById(notice.getId()).get();
        assertNotNull(found);
        assertTrue(found.equals(notice));
        log.warn(found + "");
    }
}
