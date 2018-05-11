package com.siwoo.springblog.domain;

import org.junit.Test;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

import static org.junit.Assert.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 4:31
 **/


public class TestBloggerDetails {

    @Test
    public void parse() {
        Blogger blogger = new Blogger();
        blogger.setEmail("test");

        blogger.addRole(new BloggerRole(BloggerRole.Role.ADMIN));
        blogger.addRole(new BloggerRole(BloggerRole.Role.GUEST));

        Collection<? extends GrantedAuthority> authorities = BloggerDetails.parse(blogger);

        System.out.println(authorities);
        assertTrue(((Collection) authorities).size() == 2);

        blogger = new Blogger();
        blogger.setEmail("test");

        blogger.addRole(new BloggerRole(BloggerRole.Role.ADMIN));
        authorities = BloggerDetails.parse(blogger);
        System.out.println(authorities);
        assertTrue(((Collection) authorities).size() == 1);
    }

    @Test
    public void constructor() {
        Blogger blogger = new Blogger();
        blogger.setEmail("test");
        blogger.setPassword("password");

        BloggerDetails bloggerDetails = new BloggerDetails(blogger);
        assertTrue(bloggerDetails.getTarget().equals(blogger));
        assertTrue(bloggerDetails.getUsername().equals(blogger.getEmail()));
        assertTrue(bloggerDetails.getPassword().equals(blogger.getPassword()));
    }
}
