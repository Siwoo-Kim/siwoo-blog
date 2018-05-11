package com.siwoo.springblog.domain;

import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 4:16
 **/

public class BloggerDetails extends User {
    private Blogger target;
    private final static String ROLE_PREFIX = "ROLE_";

    public BloggerDetails(Blogger blogger) {
        super(blogger.getEmail(), blogger.getPassword(), parse(blogger));
        this.target = blogger;
    }

    public Blogger getTarget() {
        return target;
    }

    static Collection<? extends GrantedAuthority> parse(Blogger blogger) {
        return AuthorityUtils
                .createAuthorityList(blogger
                        .getRoles()
                        .stream()
                        .map(BloggerRole::getRole)
                        .map(role -> ROLE_PREFIX+role)
                        .collect(Collectors.toList())
                        .stream()
                        .toArray(String[]::new));
    }
}
