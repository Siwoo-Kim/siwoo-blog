package com.siwoo.springblog.web.rest;

import com.siwoo.springblog.domain.Notice;
import com.siwoo.springblog.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:44
 **/

@RestController
@RequestMapping("/rest/notice")
public class NoticeController {

    @Autowired
    NoticeRepository noticeRepository;

    @GetMapping
    public List<Notice> all() {
        return noticeRepository.findAllOrderByRecent();
    }
    
}
