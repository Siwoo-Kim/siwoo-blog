package com.siwoo.springblog.domain;

import org.junit.Test;

import static junit.framework.TestCase.assertTrue;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-12 오후 5:08
 **/


public class TestNoticeReply {

    @Test
    public void addChild() {
        NoticeReply noticeReply = new NoticeReply();
        noticeReply.setContent("Nice Notice!");

        NoticeReply child = new NoticeReply();
        child.setContent("Nice Notice!x2");
        noticeReply.addChild(child);
        assertTrue(child.getParent().equals(noticeReply));
        assertTrue(noticeReply.getChildren().contains(child));
    }

}
