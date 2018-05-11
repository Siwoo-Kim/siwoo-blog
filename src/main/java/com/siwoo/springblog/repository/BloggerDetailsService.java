package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Blogger;
import com.siwoo.springblog.domain.BloggerDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 4:36
 **/

@Service
public class BloggerDetailsService implements UserDetailsService {

    @Autowired BloggerRepository bloggerRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Blogger blogger = Optional
                .ofNullable(bloggerRepository.findByEmail(email))
                .orElseThrow(() -> new UsernameNotFoundException("not found user"));

        return new BloggerDetails(blogger);
    }
}
