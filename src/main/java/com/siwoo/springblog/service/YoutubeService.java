package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.support.Youtube;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오전 11:29
 **/

public interface YoutubeService {

    Youtube get(String videoId);
}
