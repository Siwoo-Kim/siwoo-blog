package com.siwoo.springblog.repository;

import com.siwoo.springblog.domain.Blogger;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 4:36
 **/

public interface BloggerRepository extends JpaRepository<Blogger, Long> {

    Blogger findByEmail(String email);

}
