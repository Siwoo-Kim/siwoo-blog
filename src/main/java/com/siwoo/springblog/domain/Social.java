package com.siwoo.springblog.domain;

import lombok.Data;

/**
 * @author SiWoo Kim,
 * @version 1.0.0
 * @email sm123tt@gmail.com
 * @github : https://github.com/Siwoo-Kim
 * @since 2018-05-11 오후 3:52
 **/

@Data
public class Social {

    private static final String PREFIX_LOGIN_PAGE = "/oauth2/authorization/";
    private static final String SUFFIX_IMG_NAME = "-img";

    private String loginPage;
    private String name;
    private String imgName;

    public Social(String name) {
        this.name = name;
        this.imgName = this.name + SUFFIX_IMG_NAME;
        this.loginPage = PREFIX_LOGIN_PAGE + name;
    }

}
