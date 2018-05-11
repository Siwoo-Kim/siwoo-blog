package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Blogger;
import com.siwoo.springblog.repository.BloggerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 4:41
 **/

@Service
public class BloggerServiceImpl implements BloggerService {

    @Autowired
    PasswordEncoder passwordEncoder;

    @Autowired
    BloggerRepository bloggerRepository;

    @Override
    public Blogger join(Blogger blogger) {
        System.out.println(blogger);
        blogger.setPassword(passwordEncoder.encode(blogger.getPassword()));
        bloggerRepository.save(blogger);
        return blogger;
    }
}
