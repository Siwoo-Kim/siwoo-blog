package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Notice;
import com.siwoo.springblog.repository.NoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

import javax.validation.Valid;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:12
 **/

@Service
public class NoticeServiceImpl implements NoticeService{

    @Autowired
    NoticeRepository noticeRepository;

    @Override
    public Notice announce(@Valid Notice notice) {
        Assert.notNull(notice.getBlogger(), "Notice should be announced by blogger");
        return noticeRepository.save(notice);
    }
}
