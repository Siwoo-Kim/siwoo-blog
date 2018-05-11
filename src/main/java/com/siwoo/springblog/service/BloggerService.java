package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Blogger;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-09 오후 4:41
 **/

@Transactional(readOnly = true)
public interface BloggerService {

    @Transactional(readOnly = false)
    Blogger join(Blogger blogger);

}
