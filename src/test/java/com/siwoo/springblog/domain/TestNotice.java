package com.siwoo.springblog.domain;

import com.siwoo.springblog.domain.support.NoticeException;
import org.junit.Test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.fail;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:19
 **/


public class TestNotice {

    @Test(expected = NoticeException.class)
    public void setBlogger() {

        Blogger blogger = new Blogger();
        blogger.addRole(new BloggerRole(BloggerRole.Role.ADMIN));
        Notice notice = new Notice();
        notice.setBlogger(blogger);
        assertNotNull(notice.getBlogger().equals(blogger));

        /*blogger = new Blogger();
        blogger.addRole(new BloggerRole(BloggerRole.Role.GUEST));
        notice = new Notice();
        notice.setBlogger(blogger);
        assertNotNull(notice.getBlogger().equals(blogger));*/
        blogger = new Blogger();
        blogger.addRole(null);
        notice = new Notice();
        notice.setBlogger(blogger);
        assertNotNull(notice.getBlogger().equals(blogger));
        fail();
    }

}
