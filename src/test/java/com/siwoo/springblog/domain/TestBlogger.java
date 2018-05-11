package com.siwoo.springblog.domain;

import org.junit.Test;

import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 4:02
 **/


public class TestBlogger {

    @Test
    public void addRole() {
        Blogger blogger = new Blogger();
        blogger.setEmail("bloger");

        BloggerRole bloggerRole = new BloggerRole(BloggerRole.Role.ADMIN);
        blogger.addRole(bloggerRole);
        assertTrue(blogger.getRoles().contains(bloggerRole));
        assertTrue(bloggerRole.getRole().equals(BloggerRole.Role.ADMIN));
        assertTrue(bloggerRole.getBlogger().equals(blogger));

        bloggerRole = new BloggerRole(BloggerRole.Role.ADMIN);
        blogger.addRole(bloggerRole);
        assertTrue(blogger.getRoles().contains(bloggerRole));
        assertTrue(blogger.getRoles().size() == 1);
        assertTrue(bloggerRole.getRole().equals(BloggerRole.Role.ADMIN));
        assertTrue(bloggerRole.getBlogger().equals(blogger));

        bloggerRole = new BloggerRole(BloggerRole.Role.GUEST);
        blogger.addRole(bloggerRole);
        assertTrue(blogger.getRoles().contains(bloggerRole));
        assertTrue(blogger.getRoles().size() == 2);
        assertTrue(bloggerRole.getRole().equals(BloggerRole.Role.GUEST));
        assertTrue(bloggerRole.getBlogger().equals(blogger));
    }

    @Test
    public void setBlogger() {
        Blogger blogger = new Blogger();
        blogger.setEmail("bloger");

        BloggerRole bloggerRole = new BloggerRole(BloggerRole.Role.ADMIN);
        bloggerRole.setBlogger(blogger);
        assertTrue(blogger.getRoles().contains(bloggerRole));
        assertTrue(bloggerRole.getRole().equals(BloggerRole.Role.ADMIN));
        assertTrue(bloggerRole.getBlogger().equals(blogger));

        bloggerRole = new BloggerRole(BloggerRole.Role.ADMIN);
        bloggerRole.setBlogger(blogger);
        assertTrue(blogger.getRoles().contains(bloggerRole));
        assertTrue(blogger.getRoles().size() == 1);
        assertTrue(bloggerRole.getRole().equals(BloggerRole.Role.ADMIN));
        assertTrue(bloggerRole.getBlogger().equals(blogger));

        bloggerRole = new BloggerRole(BloggerRole.Role.GUEST);
        bloggerRole.setBlogger(blogger);
        assertTrue(blogger.getRoles().contains(bloggerRole));
        assertTrue(blogger.getRoles().size() == 2);
        assertTrue(bloggerRole.getRole().equals(BloggerRole.Role.GUEST));
        assertTrue(bloggerRole.getBlogger().equals(blogger));
    }
}
