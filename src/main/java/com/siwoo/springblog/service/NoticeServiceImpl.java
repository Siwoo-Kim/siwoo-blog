package com.siwoo.springblog.service;

import com.siwoo.springblog.domain.Notice;
import com.siwoo.springblog.domain.NoticeReply;
import com.siwoo.springblog.repository.NoticeReplyRepository;
import com.siwoo.springblog.repository.NoticeRepository;
import com.siwoo.springblog.service.support.NoticeServiceException;
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
    @Autowired
    NoticeReplyRepository noticeReplyRepository;

    @Override
    public Notice announce(@Valid Notice notice) {
        Assert.notNull(notice.getBlogger(), "Notice should be announced by blogger");
        return noticeRepository.save(notice);
    }

    @Override
    public NoticeReply reply(@Valid NoticeReply noticeReply) {
        validateNotice(noticeReply.getNotice());
        validateParent(noticeReply.getParent());
        return noticeReplyRepository.save(noticeReply);
    }

    private void validateParent(NoticeReply parent) {
        if(parent == null) {
            return;
        }
        validateNoticeReply(parent);
    }

    private void validateNoticeReply(NoticeReply parent) {
        if(noticeReplyRepository.existsById(parent.getId())) {
            return;
        }
        throw new NoticeServiceException("You cannot reply for the reply which is not exists");
    }

    private void validateNotice(Notice notice) {
        if(noticeRepository.existsById(notice.getId())) {
            return;
        }
        throw new NoticeServiceException("Notice does not exists");
    }


}
