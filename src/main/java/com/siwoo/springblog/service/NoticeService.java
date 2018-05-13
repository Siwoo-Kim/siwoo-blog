package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Notice;
import com.siwoo.springblog.domain.NoticeReply;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;

import javax.validation.Valid;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:12
 **/

@Validated
@Transactional(readOnly = true)
public interface NoticeService {

    @Transactional(readOnly = false)
    Notice announce(@Valid Notice notice);

    @Transactional(readOnly = false)
    NoticeReply reply(@Valid NoticeReply noticeReply);
}
