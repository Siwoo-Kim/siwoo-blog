package com.siwoo.springblog.support.fixture;

import com.siwoo.springblog.domain.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-10 오후 4:35
 **/

public class NoticeFixtureProvider {

    static List<Notice> notices(Blogger blogger) {
        List<Notice> notices = new ArrayList<>();

        Notice notice = new Notice();
        notice.setTitle("Version of  1.0.0 Junior Blog Now Available!");
        notice.setContent("The 1.0.0 release of Junior Blog is here! This is a major release focused less on main feature, and on making it public through Heroku show you with some nice lectures! .");
        notice.setBasicDate(new BasicDate(LocalDate.of(2018,5,8), null));
        notice.setBlogger(blogger);
        notice.setImage(new Image("notice-20180508",Notice.IMG_RESOURCE_PATH, ImageExtension.PNG));
        notices.add(notice);

        notice = new Notice();
        notice.setTitle("The Junior Developer looking for an co-operation position!");
        notice.setContent("If you are interest in my portfolio and my skills, please do not hesitate and just contact me via email (sm123tt@gmail.com).");
        notice.setBasicDate(new BasicDate(LocalDate.of(2018,5,9), null));
        notice.setImage(new Image("notice-20180509",Notice.IMG_RESOURCE_PATH, ImageExtension.JPEG));
        notice.setBlogger(blogger);
        notice.setBlogger(blogger);
        notices.add(notice);

        notice = new Notice();
        notice.setTitle("Social Login Feature Now Available!");
        notice.setContent("You can login by another service via Oauth2 token, such as Github, Google Facebook. ");
        notice.setBasicDate(new BasicDate(LocalDate.of(2018,5,11), null));
        notice.setImage(new Image("notice-20180511",Notice.IMG_RESOURCE_PATH, ImageExtension.JPEG));
        notice.setBlogger(blogger);
        notice.setBlogger(blogger);
        notices.add(notice);

        notice = new Notice();
        notice.setTitle("Notice Board is created!");
        notice.setContent("I will bring good news about blog in the page, and you will can reply for the notices in the page! Good Day!");
        notice.setBasicDate(new BasicDate(LocalDate.of(2018,5,12), null));
        notice.setImage(new Image("notice-20180512",Notice.IMG_RESOURCE_PATH, ImageExtension.JPEG));
        notice.setBlogger(blogger);
        notice.setBlogger(blogger);
        notices.add(notice);

        return notices;
    }
}
