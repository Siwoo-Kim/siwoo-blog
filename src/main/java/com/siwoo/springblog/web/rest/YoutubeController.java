package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.support.Youtube;
import com.siwoo.springblog.service.YoutubeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-07 오전 11:47
 **/

@RestController
@RequestMapping("/rest/youtube")
public class YoutubeController {

    @Autowired
    YoutubeService youtubeService;

    @GetMapping("/{videoId}")
    public Youtube youtube(@PathVariable String videoId) {
        return youtubeService.get(videoId);
    }
}
