package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Blogger;
import com.siwoo.springblog.domain.BloggerRole;
import com.siwoo.springblog.domain.Notice;
import com.siwoo.springblog.domain.NoticeReply;
import com.siwoo.springblog.domain.support.NoticeException;
import com.siwoo.springblog.repository.BloggerRepository;
import com.siwoo.springblog.repository.NoticeReplyRepository;
import com.siwoo.springblog.repository.NoticeRepository;
import com.siwoo.springblog.repository.TestRepositorySupporter;
import lombok.extern.slf4j.Slf4j;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.validation.ConstraintViolationException;

import static org.junit.Assert.*;

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
    @Autowired
    NoticeReplyRepository noticeReplyRepository;

    @Test
    public void announce() {
        Blogger blogger = noticer(bloggerRepository);
        Notice notice = new Notice();
        notice.setBlogger(blogger);
        noticeService.announce(notice);

        Notice found = noticeRepository.findById(notice.getId()).get();
        assertNotNull(found);
        assertTrue(found.equals(notice));
    }

    @Test
    public void reply() {
        Blogger blogger = noticer(bloggerRepository);
        Notice notice = notice(blogger, noticeService);
        Blogger replyer = replyer(bloggerRepository);

        NoticeReply reply = reply(replyer,notice, noticeService);
        assertNotNull(noticeReplyRepository.findById(reply.getId()));
        assertNotNull(reply.getBlogger());
        assertNotNull(reply.getNotice());
    }

    @Test(expected = ConstraintViolationException.class)
    public void replyForNotExitsNotice() {
        Blogger noticer = noticer(bloggerRepository);
        Blogger replyer = replyer(bloggerRepository);

        NoticeReply reply = new NoticeReply();
        reply.setBlogger(replyer);
        noticeService.reply(reply);
        fail();
    }


    @Test
    public void replyForChildren() {
        Blogger noticer = noticer(bloggerRepository);
        Blogger replyer = replyer(bloggerRepository);

        Notice notice = notice(noticer, noticeService);
        NoticeReply noticeReply = reply(replyer, notice, noticeService);

        NoticeReply child = new NoticeReply();
        child.setBlogger(replyer);
        child.setNotice(notice);
        child.setContent("Nice Notice!");
        noticeReply.addChild(child);
        noticeService.reply(child);

        NoticeReply found = noticeReplyRepository.findById(child.getId()).get();
        NoticeReply parent = noticeReplyRepository.findById(noticeReply.getId()).get();
        assertEquals(found.getParent(), noticeReply);
        assertTrue(parent.isChild(found));

    }

    private static NoticeReply reply(Blogger replyer,Notice notice, NoticeService noticeService) {
        NoticeReply reply = new NoticeReply();
        reply.setBlogger(replyer);
        reply.setNotice(notice);
        reply.setContent("Nice Notice!");
        noticeService.reply(reply);
        return reply;
    }

    private static Notice notice(Blogger noticer, NoticeService noticeService) {
        Notice notice = new Notice();
        notice.setBlogger(noticer);
        noticeService.announce(notice);
        return notice;
    }
    private static Blogger noticer(BloggerRepository bloggerRepository) {
        Blogger blogger = new Blogger();
        blogger.addRole(new BloggerRole(BloggerRole.Role.ADMIN));
        assertTrue(blogger.hasRole(BloggerRole.Role.ADMIN));
        bloggerRepository.save(blogger);
        return blogger;
    }

    private static Blogger replyer(BloggerRepository bloggerRepository) {
        Blogger replyer = new Blogger();
        replyer.addRole(new BloggerRole(BloggerRole.Role.GUEST));
        assertTrue(replyer.hasRole(BloggerRole.Role.GUEST));
        bloggerRepository.save(replyer);
        return replyer;
    }



}
